import React from 'react'
import { Provider } from 'react-redux'

import store from '~/store'
import './style.css'
import { Beep } from '~/components'

/**
 * App.
 *
 * @example <App />
 * @returns {void}
 */
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Beep />
    </Provider>
  )
}

export default App
