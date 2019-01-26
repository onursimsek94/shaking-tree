'use strict'

import React from 'react'
import '../resource/image/apple.png'

const Apple = props => (
  <img
    id={props.id}
    src={'public/apple.png'}
    style={props.style}
  />
)

export default Apple
