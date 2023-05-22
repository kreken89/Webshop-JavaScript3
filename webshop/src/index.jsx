import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
)
