import { $ } from 'zx';

/**
 * Create a tmp directory
 *
 * @return {Promise<string>}
 */
export async function createTmpDir() {
  return (await $`mktemp -d`).toString().replace('\n', '');
}

/**
 * Copy the source file to the target directory
 *
 * @return {Promise<void>}
 */
export async function copy(sourceFile, targetDirectory) {
  return $`cp ${sourceFile} ${targetDirectory}`;
}
