import { AppState } from "../AppState.js";
import { Snacks } from "../models/Snacks.js";

class SnacksService {
  addMessage(message) {
    AppState.examples.push(new Example(message))
  }
}

export const snacksService = new SnacksService()