'use strict'

import React from 'react'
import { connect } from 'react-redux'

import '../resource/image/tree.png'

const Tree = props => (
  <div>
    <img
      className={props.shakingTree.isShaking ? 'shake-tree' : ''}
      src={'public/tree.png'}
    />
    {props.shakingTree.apples}
  </div>
)

export default connect(store => {
  return { shakingTree: store.shakingTree }
})(Tree)
