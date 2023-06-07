#!/usr/bin/env node

import { NovoService } from '../dist/cli.js'

async function main() {
  const service = new NovoService()

  await service.run()
}

main()
