import * as api from '.';

describe('preview', () => {
  afterEach(() => {
    jest.resetModules();
  });

  const isFunction = (value: unknown) => typeof value === 'function';

  it('should return the client api in a browser environment', () => {
    expect(Object.keys(api).length).toBeGreaterThan(0);
    expect(Object.values(api).every(isFunction)).toEqual(true);
  });

  it('should return the client api in a node.js environment', () => {
    expect(Object.keys(api).length).toBeGreaterThan(0);
    expect(Object.values(api).every(isFunction)).toEqual(true);
  });
});
