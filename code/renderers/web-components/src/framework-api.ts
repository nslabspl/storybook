/* eslint-disable no-underscore-dangle */
/* global window */

export function isValidComponent(tagName: string) {
  if (!tagName) {
    return false;
  }
  if (typeof tagName === 'string') {
    return true;
  }
  throw new Error('Provided component needs to be a string. e.g. component: "my-element"');
}

export function isValidMetaData(customElements: any) {
  if (!customElements) {
    return false;
  }

  if (
    (customElements.tags && Array.isArray(customElements.tags)) ||
    (customElements.modules && Array.isArray(customElements.modules))
  ) {
    return true;
  }
  throw new Error(`You need to setup valid meta data in your config.js via setCustomElements().
    See the readme of addon-docs for web components for more details.`);
}

/**
 * @param customElements any for now as spec is not super stable yet
 */
export function setCustomElements(customElements: any) {
  // @ts-expect-error (Converted from ts-ignore)
  window.__STORYBOOK_CUSTOM_ELEMENTS__ = customElements;
}

export function setCustomElementsManifest(customElements: any) {
  // @ts-expect-error (Converted from ts-ignore)
  window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__ = customElements;
}

export function getCustomElements() {
  // @ts-expect-error (Converted from ts-ignore)
  return window.__STORYBOOK_CUSTOM_ELEMENTS__ || window.__STORYBOOK_CUSTOM_ELEMENTS_MANIFEST__;
}
