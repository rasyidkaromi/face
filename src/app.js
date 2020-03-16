import React from 'react'

import Main from './view/main'
import Loadings from './components/loading'
import GlobalStyle from './style/globalStyle'

import LoadingProvider from './context/loadingcontext'
import EndCatProvider from './context/endcatcontext'
import { StateProvider } from './context/statecontext'

const App = () => (
  <>
    <GlobalStyle />
    <LoadingProvider>
      <EndCatProvider>
          <StateProvider>
            <Loadings />
            <Main />
          </StateProvider>
      </EndCatProvider>
    </LoadingProvider>
  </>
)

export default App
