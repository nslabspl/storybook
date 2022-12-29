import detectFreePort from 'detect-port';
import type { Task } from '../task';
import { exec } from '../utils/exec';

export const PORT = process.env.STORYBOOK_SERVE_PORT
  ? parseInt(process.env.STORYBOOK_SERVE_PORT, 10)
  : 8001;
export const serve: Task = {
  description: 'Serve the build storybook for a sandbox',
  service: true,
  dependsOn: ['build'],
  async ready() {
    return (await detectFreePort(PORT)) !== PORT;
  },
  async run({ builtSandboxDir, codeDir }, { debug }) {
    const controller = new AbortController();
    exec(
      `yarn http-server ${builtSandboxDir} --port ${PORT}`,
      { cwd: codeDir },
      { debug, signal: controller.signal as AbortSignal }
    ).catch((err) => {
      // If aborted, we want to make sure the rejection is handled.
      if (!err.killed) throw err;
    });
    await exec(`yarn wait-on http://localhost:${PORT}`, { cwd: codeDir }, { debug });
    return controller;
  },
};
