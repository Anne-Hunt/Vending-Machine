import { AppState } from "../AppState.js";
import { Snacks } from "../models/Snacks.js";
import { SnacksController } from "../controllers/SnacksController.js";

class SnacksService {

  addMoney() {
    AppState.money += .25
  }

  buySnack(snackId) {
    let boughtSnack = AppState.snacks.find(snack => snack.id == snackId)
    if (boughtSnack.qty > 0) {
      console.log('qty', boughtSnack.qty)
      if (AppState.money >= boughtSnack.price && boughtSnack.qty > 0) {
        AppState.money -= boughtSnack.price
        boughtSnack.qty--
        console.log(boughtSnack.qty, AppState.money)
      } else {
        window.alert('You need more money!')
      }
    }
  }
}


export const snacksService = new SnacksService()