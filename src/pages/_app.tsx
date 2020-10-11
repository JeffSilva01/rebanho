import { AppProps } from 'next/app'

import GlobalState from '../styles/GlobalStyles'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalState />
    </>
  )
}

export default MyApp
