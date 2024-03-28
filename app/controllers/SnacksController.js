import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksServices.js"
import { Snacks } from "../models/Snacks.js"
import { setHTML, setText } from "../utils/Writer.js";

export class SnacksController {
  constructor() {
    this.drawSnacksContent()
    this.drawMoney()
    this.drawSnacksButton()
  }

  drawSnacksContent() {
    let snacks = AppState.snacks
    let snacksContent = ''
    snacks.forEach(snack => snacksContent += snack.SnacksCard)
    let snacksElem = document.getElementById('snacksContent')
    snacksElem.innerHTML = snacksContent
  }

  drawSnacksButton() {
    let snacks = AppState.snacks
    let buttonContent = ''
    snacks.forEach(snack => buttonContent += snack.SnacksButton)
    let buttonElem = document.getElementById('buttons')
    buttonElem.innerHTML = buttonContent
  }

  drawMoney() {
    let money = AppState.money
    setText('money', `${money.toFixed(2)}`)
  }

  drawOutOfStock(snackId) {
    let goneElem = document.getElementById(snackId)
    goneElem.innerHTML = Snacks.SnacksGone
  }

  addMoney() {
    console.log('adding money')
    snacksService.addMoney()
    this.drawMoney()
  }

  buySnack(snackId) {
    console.log('buying snacks')
    let boughtSnack = AppState.snacks.find(snack => snack.id == snackId)
    if (boughtSnack.qty <= 0) {
      console.log('out of stock', snackId)
      window.alert('Out of Stock!')
      this.drawOutOfStock(snackId)
    } else {
      snacksService.buySnack(snackId)
      this.drawMoney()
      this.drawSnacksContent()
    }
  }
}
