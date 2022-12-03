import { $ } from 'zx';

/**
 * Git add everything and commit all the files
 *
 * @param {string} commitMessage
 * @return {Promise<void>}
 */
export async function commitEverythingInDirectory(commitMessage) {
  await $`git add .`;

  try {
    await $`git commit -m ${commitMessage}`;
  } catch (e) {
    console.log(`Nothing to commit 🤷`);
  }
}

/**
 * Init a Git repository
 *
 * @param {string} branch
 * @return {Promise<void>}
 */
export async function initRepo() {
  await $`git init`;
}
