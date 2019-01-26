'use strict'

// Rasgele sayı üretmek için kullanılır.
export function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Elmaların düşme animasyonu için kullanılır.
export function startDropApplesAnimation (appleId, cbFunc) {
  const droppedApple = document.getElementById(appleId)

  const droppedAppleInterval = setInterval(() => {
    if (droppedApple.y === 512) {
      setTimeout(() => {
        cbFunc(appleId)
      }, 1000)
      clearInterval(droppedAppleInterval)
    } else {
      droppedApple.style.top = `${droppedApple.y + 1}px`
    }
  }, 1)
}

// Elmaları sepete taşımak için kullanılır.(Pozisyonları değiştirilir.)
export function changePositionAppleForBasket (appleId) {
  const basket = document.getElementById('basket')
  const droppedApple = document.getElementById(appleId)
  const topPosition = getRandomNumber(basket.getBoundingClientRect().top + 40, basket.getBoundingClientRect().top + 140)
  const leftPosition = getRandomNumber(50, 190)

  droppedApple.style.top = `${topPosition}px`
  droppedApple.style.left = `${leftPosition}px`
}
