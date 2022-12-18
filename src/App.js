import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './state'

import Header from './components/Header'
import ProductList from './components/ProductList'

import './main.sass'

function App() {
  return (
    <div className="app">
      <Provider store={createStore(reducer)}>
        <Header />
        <ProductList />
      </Provider>
    </div>
  )
}

export default App
