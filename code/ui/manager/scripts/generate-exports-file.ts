/* eslint-disable no-console */
import fs from 'fs-extra';
import path from 'path';
import { dedent } from 'ts-dedent';
import { ESLint } from '../../../../scripts/node_modules/eslint';
import { values } from '../src/globals/runtime';

const removeDefault = (input: string) => input !== 'default';

const location = path.join(__dirname, '..', 'src', 'globals', 'exports.ts');

const run = async () => {
  const data = Object.entries(values).reduce<Record<string, string[]>>((acc, [key, value]) => {
    acc[key] = Object.keys(value).filter(removeDefault);
    return acc;
  }, {});

  console.log('Generating...');
  const readyToWrite = fs.ensureFile(location);
  const text = dedent`
    // this file is generated by generate-exports-file.ts
    // this is done to prevent runtime dependencies from making it's way into the build/start script of the manager
    // the manager builder needs to know which dependencies are 'globalized' in the ui

    export default ${JSON.stringify(data, null, 2)} as const;`;

  console.log('Linting...');

  const eslint = new ESLint({
    cwd: path.join(__dirname, '..'),
    fix: true,
  });
  const output = await eslint.lintText(text, { filePath: location });

  await readyToWrite;
  await fs.writeFile(location, output[0].output);

  console.log('Done!');
};

run().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
