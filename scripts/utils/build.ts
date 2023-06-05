import { build, type Options } from 'tsup'
import path from 'path'
import fs from 'fs'

export function buildSync(opts: Options = {}) {
  return new Promise<void>((resolve, reject) => {
    const pkg = path.basename(process.cwd())
    console.log('start build', pkg)
    build({
      silent: true,
      ...opts,
      clean: true,
      watch: opts.watch,
    }).then(() => {
      console.log('build success2', pkg)
      if (pkg.includes('cli')) {
        const dts = path.join(process.cwd(), 'dist/index.d.ts')
        console.log('dts path2', dts)
        setTimeout(() => {
          const exist = fs.existsSync(dts)
          console.log('cli.d.ts exist2', exist)
          resolve()
        }, 0)
      } else {
        resolve()
      }
    }).catch((err) => {
      reject(err)
    })
  })
}
