import {
  activeButton,
  activeButtonBot
} from './button-select.js'

export function showImage(slide, count) {
  slide.forEach(img => {
    img.style.display = "none";
  })

  slide.forEach(img => {
    if (img.dataset.id == count) {
      img.style.display = "block";
    }
  })
  activeButton();
  activeButtonBot();
}