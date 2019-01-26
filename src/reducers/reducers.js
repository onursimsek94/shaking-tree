'use strict'

import { combineReducers } from 'redux'
import {
  START_SHAKE_ANIMATION_FOR_TREE,
  STOP_SHAKE_ANIMATION_FOR_TREE,
  CREATE_APPLES_FOR_TREE,
  MOVE_APPLE_TREE_TO_BASKET
} from '../constants/constants'

const initialState = {
  isShaking: false,
  totalApples: 20,
  apples: [],
  applesInBasket: []
}

function shakingTree (state = initialState, action) {
  switch (action.type) {
    case START_SHAKE_ANIMATION_FOR_TREE:
      return { ...state, isShaking: true }
    case STOP_SHAKE_ANIMATION_FOR_TREE:
      return { ...state, isShaking: false }
    case CREATE_APPLES_FOR_TREE:
      return { ...state, apples: action.data }
    case MOVE_APPLE_TREE_TO_BASKET:
      let apples = state.apples.filter(item => item.props.id !== action.data)
      let applesInBasket = state.applesInBasket.concat(state.apples.filter(item => item.props.id === action.data))

      return { ...state, apples, applesInBasket }
    default:
      return state
  }
}

export default combineReducers({
  shakingTree
})
