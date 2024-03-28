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
  <div id="${this.id}" class="col-3 d-flex justify-content-center">
    <div class="card text-center bg-dark">
      <img src="${this.imgURL}" alt="snacks" class="card-image snackimage py-1 mb-1 ">
      <span class="bg-white rounded shadow"><h5 class="m-0">${this.name}</h5>
      <span>${this.price}</span>
      <span>${this.id}</span></span>
    </div>
  </div>`
  }

  get SnacksButton() {
    return `<div class="p-2 w-50 d-flex justify-content-center">
      <button class="btn btn-secondary rounded-circle col-2 p-2 g-1 snackbutton text-center border border-dark border-1 shadow" onclick="app.SnacksController.buySnack('${this.id}')">${this.id}</button></div>`
  }

  static get SnacksGone() {
    return `
      <div class="card text-center bg-dark">
        <img src="https://em-content.zobj.net/source/google/387/cross-mark_274c.png" alt="snacks" class="card-image snackimage py-1 mb-1 ">
        <span class="bg-white rounded shadow"><h5 class="m-0">Out of Stock</h5>
        <span class="stockgone">contact vendor</span>
        <span class="stockgone">out of stock</span></span>
      </div>

`
  }
}