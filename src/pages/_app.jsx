import {Provider} from 'react-redux'
import store from '../store'

import Header from '../components/header'

import GlobalStyle from '../styles/globals.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle/>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
