#!/usr/bin/env node

import assert from 'assert'
import { sync } from 'cross-spawn'
import { existsSync } from 'fs'
import { join } from 'path'
import pico from 'picocolors'
import { fileURLToPath } from 'url'

export async function run() {
  const argv = process.argv.slice(2)
  const [name, ...throughArgs] = argv
  const scriptsPath = join(fileURLToPath(new URL('.', import.meta.url)), `./cmd/${name}.ts`)

  assert(existsSync(scriptsPath) && !name.startsWith('.'), `Executed script '${pico.red(name)}' does not exist`)

  console.log(pico.cyan(`novo-scripts: ${name}\n`))

  const scriptPathAsStr = JSON.stringify(scriptsPath)
  const spawn = sync('pnpm tsx', [scriptPathAsStr, ...throughArgs], {
    env: process.env,
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  })
  if (spawn.status !== 0) {
    console.log(pico.red(`novo-scripts: ${name} execute fail`))
    process.exit(1)
  }
}

run()
