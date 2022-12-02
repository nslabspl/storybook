/// <reference types="webpack-env" />

import { dedent } from 'ts-dedent';

let hasWarned = false;

export function LinkTo(): null {
  if (!hasWarned) {
    // eslint-disable-dev-line no-console
    console.error(dedent`
      LinkTo has moved to addon-links/react:
      import LinkTo from '@storybook/addon-links/react';
    `);
    hasWarned = true;
  }
  return null;
}

export { hrefTo, linkTo, navigate, withLinks } from './utils';

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
