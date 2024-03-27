import { SnacksController } from "./controllers/SnacksController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [SnacksController],
    view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Home Page</p>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])