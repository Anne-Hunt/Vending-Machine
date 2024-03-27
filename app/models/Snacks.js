export class Snacks {

  /** 
   * @param {{name, price, imgURL}} data 
   */
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgURL = data.imgURL
  }

  get SnacksCard() {
    return `
  <div class="col-3">
    <div class="card text-center">
      <img src="${this.imgURL}" alt="snacks" class="card-image">
      <h2>${this.name}</h2>
      <p>${this.price}</p>
      <p class="bcode">${this.price}</p>
    </div>
  </div>`
  }

  static get SnacksCard() {
    return `
    <div class="col-3">
  <div class="card text-center">
    <img src="https://em-content.zobj.net/source/google/387/cross-mark_274c.png" alt="snacks" class="card-image">
    <h2>Out of Stock</h2>
    <p>contact vendor</p>
    <p class="bcode">out of stock</p>
  </div>
</div>
`
  }
}