import { CoreService } from '@novojs/cli'

export class NovoService extends CoreService {
  constructor() {
    super()
    console.log('NovoService')
  }

  async run() {
    super.run()
    console.log('Hello Novojs!')
  }
}
