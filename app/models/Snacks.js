import { AppState } from "../AppState.js"
export class Snacks {

  /** 
   * @param {{name, price, imgURL, id, qty}} data 
   */
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgURL = data.imgURL
    this.id = data.id
    this.qty = data.qty
  }

  get SnacksCard() {
    return `
  <div class="col-3">
    <div class="card text-center">
      <img src="${this.imgURL}" alt="snacks" class="card-image">
      <h4>${this.name}</h4>
      <span>${this.price}</span>
      <span class="bcode">${this.id}</span>
    </div>
  </div>`
  }

  get SnacksButton() {
    return `
    <div class="col-1">
    <button class="btn btn-secondary rounded-circle" onclick="app.SnacksController.buySnack('${this.id}')">${this.id}</button>
  </div>`
  }

  static get SnacksGone() {
    return `
    <div class="col-3">
  <div class="card text-center">
    <img src="https://em-content.zobj.net/source/google/387/cross-mark_274c.png" alt="snacks" class="card-image">
    <h4>Out of Stock</h4>
    <p>contact vendor</p>
    <p class="bcode">out of stock</p>
  </div>
</div>
`
  }
}