import { AppState } from "../AppState.js";
import { Snacks } from "../models/Snacks.js";

class SnacksService {

  addMoney() {
    AppState.money += .25
  }

  buySnack(snackId) {
    let boughtSnack = AppState.snacks.find(snack => snack.id == snackId)
    if (AppState.money >= boughtSnack.price && boughtSnack.qty > 0) {
      AppState.money -= boughtSnack.price
      boughtSnack.qty--
      console.log(boughtSnack.qty, AppState.money)
    } else {
      window.alert('You need more money!')
    }
  }
}

export const snacksService = new SnacksService()