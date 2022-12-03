import detectFreePort from 'detect-port';
import { resolve } from 'path';
import { exec } from '../utils/exec';
import type { Task } from '../task';

const codeDir = resolve(__dirname, '../../code');

export async function runRegistry({ dryRun, debug }: { debug?: boolean }) {
  const controller = new AbortController();

  exec(
    'CI=true yarn local-registry --open',
    { cwd: codeDir },
    { debug, signal: controller.signal }
  ).catch((err) => {
    // If aborted, we want to make sure the rejection is handled.
    if (!err.killed) throw err;
  });
  await exec('yarn wait-on http://localhost:6001', { cwd: codeDir }, { debug });
  return controller;
}

const REGISTRY_PORT = 6001;
export const runRegistryTask: Task = {
  description: 'Run the internal npm server',
  service: true,
  dependsOn: ['publish'],
  async ready() {
    return (await detectFreePort(REGISTRY_PORT)) !== REGISTRY_PORT;
  },
  async run(_, options) {
    return runRegistry(options);
  },
};
