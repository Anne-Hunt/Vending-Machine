import { Snacks } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Snacks.js').Snacks[]} */

  snacks = [
    new Snacks({
      name: 'Jorts',
      price: 1.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Cookie Cat',
      price: 2.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Jelly Tart',
      price: .99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Scooby Snack',
      price: .99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Pink Donut',
      price: 1.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Krabby Patty',
      price: 4.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Carrot',
      price: .19,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Picnic Basket',
      price: 24.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Boba',
      price: 5.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Smurfberries',
      price: 2.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Mouse Cheese',
      price: 1.99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    }),
    new Snacks({
      name: 'Chocolate Chip Cookie',
      price: .99,
      imgURL: "https://em-content.zobj.net/source/google/387/popcorn_1f37f.png"
    })

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())