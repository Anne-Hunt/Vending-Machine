import { Snacks } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  money = 0
  /**@type {import('./models/Snacks.js').Snacks[]} */

  snacks = [
    new Snacks({
      name: 'Jorts',
      price: 1.99,
      imgURL: "./assets/img/jorts.png",
      id: 'A1',
      qty: 4
    }),
    new Snacks({
      name: 'Cookie Cat',
      price: 2.99,
      imgURL: "./assets/img/cookie-cat.png",
      id: 'A2',
      qty: 4
    }),
    new Snacks({
      name: 'Jelly Tart',
      price: .99,
      imgURL: "./assets/img/Jelly-Tarts.png",
      id: 'A3',
      qty: 4
    }),
    new Snacks({
      name: 'Scooby Snack',
      price: .99,
      imgURL: "./assets/img/Scooby-Snacks.png",
      id: 'A4',
      qty: 4
    }),
    new Snacks({
      name: 'Pink Donut',
      price: 1.99,
      imgURL: "./assets/img/pink-donut.png",
      id: 'B1',
      qty: 4
    }),
    new Snacks({
      name: 'Krabby Patty',
      price: 4.99,
      imgURL: "./assets/img/krabby-patty.png",
      id: 'B2',
      qty: 4
    }),
    new Snacks({
      name: 'Carrot',
      price: .19,
      imgURL: "./assets/img/carrots.png",
      id: 'B3',
      qty: 4
    }),
    new Snacks({
      name: 'Picnic Basket',
      price: 24.99,
      imgURL: "./assets/img/basket.png",
      id: 'B4',
      qty: 4
    }),
    new Snacks({
      name: 'Boba',
      price: 5.99,
      imgURL: "./assets/img/Bear-Boba.png",
      id: 'C1',
      qty: 4
    }),
    new Snacks({
      name: 'Smurfberries',
      price: 2.99,
      imgURL: "./assets/img/Smurfberry_Bush.png",
      id: 'C2',
      qty: 4
    }),
    new Snacks({
      name: 'Mouse Cheese',
      price: 1.99,
      imgURL: "./assets/img/cheese.png",
      id: 'C3',
      qty: 4
    }),
    new Snacks({
      name: 'Cookie',
      price: .99,
      imgURL: "./assets/img/cookie.png",
      id: 'C4',
      qty: 4
    })

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())