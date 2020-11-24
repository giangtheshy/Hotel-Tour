import {
  imgSlide,
  slideBot
} from "../main.js"
export let counterSlideShow = 1;
export let counterSlideShowBot = 1;

import {
  showImage
} from './show-image.js'



export function eventPrevBtn() {
  counterSlideShow--;
  if (counterSlideShow < 1) {
    counterSlideShow = 7;
  }
  showImage(imgSlide, counterSlideShow);
}
export function eventPrevBtnBot() {
  counterSlideShowBot--;
  if (counterSlideShowBot < 1) {
    counterSlideShowBot = 7;
  }
  showImage(slideBot, counterSlideShowBot);
}
export function eventNextBtn() {
  counterSlideShow++;
  if (counterSlideShow > 7) {
    counterSlideShow = 1;
  }
  showImage(imgSlide, counterSlideShow);
}
export function eventNextBtnBot() {
  counterSlideShowBot++;
  if (counterSlideShowBot > 7) {
    counterSlideShowBot = 1;
  }
  showImage(slideBot, counterSlideShowBot);
}
export function slideShow() {

  counterSlideShow++;

  if (counterSlideShow > 7) {
    counterSlideShow = 1;
  }

  showImage(imgSlide, counterSlideShow);
}


export function slideShowBot() {

  counterSlideShowBot++;
  if (counterSlideShowBot > 7) {
    counterSlideShowBot = 1;
  }
  showImage(slideBot, counterSlideShowBot);
}
export function selectImage(id) {
  counterSlideShow = id;
  showImage(imgSlide, counterSlideShow);
}
export function selectImageBot(id) {
  counterSlideShowBot = id;
  showImage(slideBot, counterSlideShowBot);
}