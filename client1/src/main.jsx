import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/Product/apiSlice.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <ApiProvider api={apiSlice}>
      <App/>
    </ApiProvider>
  </React.Fragment>,
)
