import config from 'internal:novo'
import { FC } from 'react'

const Home: FC = () => {
  return <div>Hello Aora {config.port}</div>
}

export default Home
