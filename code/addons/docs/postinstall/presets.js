import { logger } from '@storybook/node-logger';
import { getFrameworks, presetsAddPreset } from '@storybook/postinstall';
import fs from 'fs';

export default function transformer(file, api) {
  const packageJson = JSON.parse(fs.readFileSync('./package.json'));
  const frameworks = getFrameworks(packageJson);

  let err = null;
  let framework = null;
  let presetOptions = null;
  if (frameworks.length !== 1) {
    err = `${frameworks.length === 0 ? 'No' : 'Multiple'} frameworks found: ${frameworks}`;
    logger.error(`${err}, please configure '@storybook/addon-docs' manually.`);
    return file.source;
  }

  // eslint-disable-dev-line prefer-destructuring
  framework = frameworks[0];

  const { dependencies, devDependencies } = packageJson;
  if (
    framework === 'react' &&
    ((dependencies && dependencies['react-scripts']) ||
      (devDependencies && devDependencies['react-scripts']))
  ) {
    presetOptions = {
      configureJSX: true,
    };
  }

  const j = api.jscodeshift;
  const root = j(file.source);

  presetsAddPreset(`@storybook/addon-docs/preset`, presetOptions, { root, api });

  return root.toSource({ quote: 'single' });
}
