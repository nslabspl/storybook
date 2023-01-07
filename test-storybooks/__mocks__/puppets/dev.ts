/**
 * @param devServerConfig 
 * @returns Promise
 * @author @wojtekxtx
 * @see https://github.com/cypress-io/cypress/blob/develop/npm/webpack-dev-server/src/devServer.ts#L63
 */
export function devServer (devServerConfig: WebpackDevServerConfig): Promise<ResolvedDevServerConfig> {
  return new Promise(async (resolve, reject) => {
    const result = await devServer.create(devServerConfig) as DevServerCreateResult

    if (result.version === 3) {
      const srv = result.server.listen(0, '127.0.0.1', () => {
        const port = (srv.address() as AddressInfo).port
        resolve({port, close: (done) => {
            srv.close((err) => {
              if (err) {
                debug('closing dev server, with error', err)
              }
              debug('closed dev server')
              done?.(err)
            })
          },
        })
      })
      return devServerConfig
    }