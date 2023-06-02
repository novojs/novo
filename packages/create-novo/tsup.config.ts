import fse from 'fs-extra'
import path from 'pathe'
import { defineConfig } from 'tsup'

export default defineConfig((opts) => {
  const pkg = fse.readJSONSync(path.resolve(__dirname, 'package.json'))
  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]
  return [
    {
      clean: true,
      dts: true,
      format: ['esm'],
      external,
      entry: ['src/*.ts'],
      sourcemap: !!opts.watch,
      outDir: 'dist',
      platform: 'node',
      target: 'node14',
    },
  ]
})
