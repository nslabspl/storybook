import { pathExists, remove } from 'fs-extra';
import { join } from 'path';
import type { Task } from '../task';
import { exec } from '../utils/exec';

export const install: Task = {
  description: 'Install the dependencies of the monorepo',
  async ready({ codeDir }) {
    return pathExists(join(codeDir, 'node_modules'));
  },
  async run({ codeDir }, { debug }) {
    await exec(`yarn install`, { cwd: codeDir }, { debug }); // Webpack5
    await remove(join(codeDir, 'node_modules', '@types', 'webpack')); // Webpack4
  },
};
