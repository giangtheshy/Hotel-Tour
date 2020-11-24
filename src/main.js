import {
  slideShow,
  slideShowBot,
  eventPrevBtn,
  eventNextBtn,
  eventNextBtnBot,
  eventPrevBtnBot,
  selectImage,
  selectImageBot
} from './slide/slide-show.js'
import {displayPlace} from './UI/display-place.js'

const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
export const imgSlide = document.querySelectorAll('.img-slide')
export const slideBot = document.querySelectorAll('.slide-bot')

const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')
const btnPrevBot = document.getElementById('btn-prev-bot')
const btnNextBot = document.getElementById('btn-next-bot')
const inputLocation = document.querySelector('#input-location')

const placeContainer = document.querySelector('.place-container')

export const btnSelectSlideTop = document.querySelectorAll('.btn-select-slide.slide-top')
export const btnSelectSlideBot = document.querySelectorAll('.btn-select-slide.slide-bottom')








window.addEventListener("DOMContentLoaded", () => {

let temp;
  fetch('../place.json')
    .then(response => response.json())
    .then(data => {
      displayPlace(data,placeContainer);
      
    })
    .catch(error => console.log(error));



  fetch('../hotel.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
  })





  setInterval(slideShow, 5000);
  setInterval(slideShowBot, 3000);
})


btnPrev.addEventListener("click", eventPrevBtn)
btnNext.addEventListener("click", eventNextBtn)
btnNextBot.addEventListener("click", eventNextBtnBot)
btnPrevBot.addEventListener("click", eventPrevBtnBot)

btnSelectSlideTop.forEach(btn => {
  btn.addEventListener("click", e => {
    let id = e.currentTarget.dataset.id;
    selectImage(id);

  })
})
btnSelectSlideBot.forEach(btn => {
  btn.addEventListener("click", e => {
    let id = e.currentTarget.dataset.id;
    selectImageBot(id);

  })
})