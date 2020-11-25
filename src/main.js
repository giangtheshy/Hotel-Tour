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
import {
  displayPlace,
  displayPlaceListInput,
  displayHotelInput
} from './UI/display-place.js'
import {
  filterHotelAllowValue
} from './filter/search-hotel.js'
import {
  saveLocalStorage
} from './localstorage/localstorage.js'
import {
  displayAmount,
  changeNumber,
  setUpDefaultCounter
} from './UI/display-amount.js'




export const imgSlide = document.querySelectorAll('.img-slide')
export const slideBot = document.querySelectorAll('.slide-bot')

const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')
const btnPrevBot = document.getElementById('btn-prev-bot')
const btnNextBot = document.getElementById('btn-next-bot')
const inputLocation = document.querySelector('#input-location')
const placesList = document.querySelector('.places-list')
const hotelList = document.querySelector('.hotels-list')
const inputBox = document.querySelector('.input-box')
const inputBoxEnter = document.querySelector('.input-box-enter')
const inputContainer = document.querySelector('.input')
const placeContainer = document.querySelector('.place-container')
const startDay = document.querySelector('#start-day')
const endDay = document.querySelector('#end-day')



export const btnSelectSlideTop = document.querySelectorAll('.btn-select-slide.slide-top')
export const btnSelectSlideBot = document.querySelectorAll('.btn-select-slide.slide-bottom')


async function dataHotel() {
  let url = '../hotel.json';
  let response = await fetch(url);
  let dataHotel = await response.json();
  return dataHotel;
}


window.addEventListener("DOMContentLoaded", () => {

  fetch('../place.json')
    .then(response => response.json())
    .then(data => {
      saveLocalStorage("places", data);
      displayPlace(data, placeContainer);
      displayPlaceListInput(data, placesList);




      dataHotel().then(dataHotel => {
        saveLocalStorage("hotels", dataHotel);
        searchHotel(dataHotel);
      });
    })
    .catch(error => console.log(error));


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

let flagBlockInputBox = false;
inputContainer.addEventListener('mousemove', () => {
  if (flagBlockInputBox) {
    inputBox.style.display = "block";
  }

})
inputContainer.addEventListener('mouseout', () => {
  if (flagBlockInputBox) {
    inputBox.style.display = "none";
  }


})

function searchHotel(hotels) {

  inputLocation.addEventListener('input', () => {

    let value = inputLocation.value;
    if (value != "") {
      flagBlockInputBox = false;
      inputBox.style.display = "none";
      inputBoxEnter.style.display = "block";
    } else {
      flagBlockInputBox = true;
      inputBox.style.display = "block";
      inputBoxEnter.style.display = "none";
    }
    let listFilter = filterHotelAllowValue(hotels, value);

    displayHotelInput(listFilter, hotelList);
    getNameHotel();

  })
  bookHotelRoom();
}


const hotels = hotelList.childNodes
const numberBox = document.querySelector('.number-box');
const amountPerson = document.querySelector('.amount-person');
const closeIcon = document.querySelector('.amount-person .fa-times')
const buttonAmount = document.querySelectorAll('.button-amount')
const numberAmount = document.querySelectorAll('.number-amount')




amountPerson.addEventListener('click', () => {
  if (numberBox.classList.contains('show')) {
    numberBox.classList.remove('show');
    closeIcon.classList.remove('show')
  } else {
    closeIcon.classList.add('show')
    numberBox.classList.add('show');
  }
})

function getNameHotel() {
  hotels.forEach(hotel => {
    hotel.addEventListener('click', () => {
      let element = hotel.childNodes[0];
      inputLocation.value = element.innerText;
      inputBoxEnter.style.display = "none";
      startDay.focus();
      let nowDate = new Date();
      let nowDay = nowDate.getDate();
      let nowMonth = nowDate.getMonth();
      let nowYear = nowDate.getFullYear();
      startDay.value = `${nowYear}-${nowMonth+1}-${nowDay}`;
      endDay.value = `${nowYear}-${nowMonth+1}-${nowDay+3}`;
      closeIcon.classList.add('show');
      numberBox.classList.add('show');
    })
  })
  setUpDefaultCounter();
  numberAmount.forEach(number => {
    displayAmount(number);
  })

}

function bookHotelRoom() {
  buttonAmount.forEach(button => {
    button.addEventListener('click', e => {
      let btn = e.currentTarget;
      changeNumber(btn);
      numberAmount.forEach(number => {
        displayAmount(number);
      })
    })
  })
}