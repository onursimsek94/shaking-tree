'use strict'

import React from 'react'
import { connect } from 'react-redux'

import {
  startShakeAnimationForTree,
  stopShakeAnimationForTree
} from '../actions/actions'

import Tree from '../components/Tree'
import Apple from '../components/Apple'
import Basket from '../components/Basket'
import {
  createApples,
  moveAppleToBasket
} from '../actions/actions'
import {
  getRandomNumber,
  startDropApplesAnimation,
  changePositionAppleForBasket
} from '../utils/helper'

class Main extends React.Component {
  // Component oluşturulduğunda, elmaların oluşturulması için createApples fonksiyonu çağırılıyor
  componentDidMount () {
    this.createApples()
  }

  // Elmalar ağacın pozisyonuna göre oluşturulup ekleniyor.
  createApples = () => {
    const { dispatch, shakingTree } = this.props
    let applesArr = []

    for (let i = 0; i < shakingTree.totalApples; i++) {
      applesArr.push(
        <Apple
          key={i}
          id={`apple-${i + 1}`}
          style={{
            position: 'absolute',
            top: `${getRandomNumber(60, 240)}px`,
            left: `${getRandomNumber(50, 430)}px`
          }}
        />
      )
    }
    dispatch(createApples(applesArr))
  }

  /*
    Ağacı sallamak için butona tıklandığında çağırılır.
    Ağaç sallanıyor ise tekrar sallanması önlenmek için kontrol yapılıyor.
    Sallama animasyonu başladıktan 3sn sonra animasyon durduruluyor, elmaların düşmesi için dropApples çağırılıyor.
  */
  handleShakeTreeClick = () => {
    const { dispatch, shakingTree } = this.props

    if (shakingTree.isShaking) {
      return
    }

    dispatch(startShakeAnimationForTree())
    setTimeout(()=> {
      dispatch(stopShakeAnimationForTree())
      this.dropApples()
    }, 3000)
  }

  /*
    Elmaların düşmesi için çağırılır.
    Tek seferde maksimum ağacın üzerinde bulunan elma sayısı kadar elmanın düşürülmesi için rasgele sayı üretilir.
    Elmanın düşme animasyonu için startDropApplesAnimation çağırılır.
  */
  dropApples = () => {
    const { shakingTree } = this.props
    for (let i = 0; i < getRandomNumber(1, shakingTree.apples.length); i++) {
      startDropApplesAnimation(shakingTree.apples[i].props.id, this.moveDroppedApple)
    }
  }

  // Elmaları sepete taşımak için çağırılır.
  moveDroppedApple = (appleId) => {
    this.props.dispatch(moveAppleToBasket(appleId))
    changePositionAppleForBasket(appleId)
  }

  render () {
    const { shakingTree } = this.props

    return (
      <React.Fragment>
        <div className='tree-basket-container'>
          <Tree />
          <Basket />
        </div>
        
        <div className='shake-button'>
          <button
            className={(shakingTree.isShaking || shakingTree.apples.length === 0) ? 'disabled' : ''}
            disabled={shakingTree.isShaking || shakingTree.apples.length === 0}
            onClick={this.handleShakeTreeClick}
          >
            Shake the tree
          </button>
        </div>

        <div className='apples-info'>
          <ul>
            <li>Total: {shakingTree.totalApples}</li>
            <li>Tree: {shakingTree.apples.length}</li>
            <li>Basket: {shakingTree.applesInBasket.length}</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(store => {
  return { shakingTree: store.shakingTree }
})(Main)
