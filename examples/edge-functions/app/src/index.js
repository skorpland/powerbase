import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Auth } from '@skorpland/auth-ui-react'
import { powerbase } from './utils/powerbaseClient'

ReactDOM.render(
  <React.StrictMode>
    <Auth.UserContextProvider powerbaseClient={powerbase}>
      <App />
    </Auth.UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
