import { buildSync } from '../utils/build'

(async () => {
  await buildSync({
    watch: true,
    dts: true,
  })
})()