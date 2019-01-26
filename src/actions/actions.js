'use strict'

import {
  START_SHAKE_ANIMATION_FOR_TREE,
  STOP_SHAKE_ANIMATION_FOR_TREE,
  CREATE_APPLES_FOR_TREE,
  MOVE_APPLE_TREE_TO_BASKET
} from '../constants/constants'

export function startShakeAnimationForTree () {
  return { type: START_SHAKE_ANIMATION_FOR_TREE }
}

export function stopShakeAnimationForTree () {
  return { type: STOP_SHAKE_ANIMATION_FOR_TREE }
}

export function createApples (apples) {
  return { type: CREATE_APPLES_FOR_TREE, data: apples }
}

export function moveAppleToBasket (apple) {
  return { type: MOVE_APPLE_TREE_TO_BASKET, data: apple }
}
