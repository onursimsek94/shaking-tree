import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'

import './resource/style/style.scss'
import Main from './containers/Main'

// Store, log'ların development'ta görünecek ve production'da görünmeyecek şekilde oluşturulur.
const store = createStore(
  reducers,
  PRODUCTION ? applyMiddleware() : applyMiddleware(createLogger())
)

ReactDom.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Main} />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
