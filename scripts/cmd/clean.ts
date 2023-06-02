import { join } from 'path'
import { sync as rimrafSync } from 'rimraf'

export async function run() {
  const cwd = process.cwd()
  rimrafSync(join(cwd, 'packages/*/dist'), { glob: true })
}

run()
