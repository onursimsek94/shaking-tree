'use strict'

import React from 'react'
import { connect } from 'react-redux'

import '../resource/image/shopping-cart.png'

const Basket = props => (
  <div className='basket'>
    <img
      id='basket'
      src={'public/shopping-cart.png'}
    />
    {props.shakingTree.applesInBasket}
  </div>
)

export default connect(store => {
  return { shakingTree: store.shakingTree }
})(Basket)
