import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/Product/api/apiSlice.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ApiProvider api={apiSlice}>
      <App/>
    </ApiProvider>
  </React.Fragment>,
)
