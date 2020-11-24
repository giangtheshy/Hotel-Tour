import {
  btnSelectSlideTop,
  btnSelectSlideBot
} from "../main.js"
import {
  counterSlideShow,
  counterSlideShowBot
} from './slide-show.js'



export function activeButton() {
  btnSelectSlideTop.forEach(btn => {
    let id = btn.dataset.id;
    if (id == counterSlideShow) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  })
}
export function activeButtonBot() {
  btnSelectSlideBot.forEach(btn => {
    let id = btn.dataset.id;
    if (id == counterSlideShowBot) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  })
}