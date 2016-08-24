import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { Routes } from '../app/routes'
import { configureStore } from '../app/store'

const store = configureStore({})

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)
