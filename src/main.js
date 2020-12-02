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
} from './UI/display-place.js'
import {
  inputLocationFunc,
  bookHotelRoom,
  flagBlockInputBox
} from './filter/search-hotel.js'
import {
  saveLocalStorage,
  removeLocalStorage,
  addLocalStorage
} from './localstorage/localstorage.js'
import {
  checkExistUser
} from './User/validation.js'
import {alert} from './js/intermediateFile.js'

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



export async function dataHotel() {
  let url = '../hotel.json';
  let response = await fetch(url);
  let dataHotel = await response.json();
  return dataHotel;
}
export async function dataPlace() {
  let url = '../place.json';
  let response = await fetch(url);
  let dataPlace = await response.json();
  return dataPlace;
}

const adminAccount = {id:1,userName:"ad",password:"ad",cart:[],statusLogin:false};

window.addEventListener("DOMContentLoaded", () => {

  if (!checkExistUser('ad','ad')){
    addLocalStorage("users",adminAccount);
  }
  
  dataPlace().then(data => {
      saveLocalStorage("places", data);
      displayPlace(data, placeContainer);
      displayPlaceListInput(data, placesList);




      dataHotel().then(dataHotel => {
        dataHotel = dataHotel.map(item => {
          let randomNum = Math.floor(Math.random() * 40 + 10)
          return {
            ...item,
            randomNum
          }
        })
        saveLocalStorage("hotels", dataHotel);
        searchHotel(dataHotel);
      });
    })
    .catch(error => console.log(error));
  
  removeLocalStorage("find");
  findHotelById();
  setInterval(slideShow, 5000);
  setInterval(slideShowBot, 3000);
})

document.querySelector('.logo-home').addEventListener('click', () => {
  window.location = '../index.html'
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

const listHandleInput = {
  inputLocation,
  inputBox,
  inputBoxEnter,
  hotelList
}

function searchHotel(hotels) {

  inputLocationFunc(hotels, listHandleInput, listGetDataInputHotel)
  bookHotelRoom(buttonAmount, numberAmount);
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

const listGetDataInputHotel = {
  hotels,
  inputLocation,
  inputBoxEnter,
  startDay,
  endDay,
  closeIcon,
  numberBox,
  numberAmount
}



const findHotel = document.querySelector('.find-hotel');

function findHotelById() {
  findHotel.addEventListener('click', () => {
    flagFindHotel = true;
    const data = getDataFindHotel();
    if (data.id === "") {
      alert("error","Please Enter Hotel !")
    } else {
      window.location.href = '../src/hotel.html'


      addLocalStorage("find", flagFindHotel);
      addLocalStorage("find", data)

    }


  })

}
placeContainer.addEventListener('click', (e) => {
  findListHotel(e, 'select-find');
})
placesList.addEventListener('click', (e) => {

  findListHotel(e, "place-list");
})
let flagFindHotel = false;
const findListHotel = (e, classL) => {
  let element = e.target;
  if (element.classList.contains(classL)) {
    flagFindHotel = true;
    let title = {
      title: element.dataset.id
    };
    window.location.href = '../src/hotel.html'
    addLocalStorage("find", flagFindHotel);
    addLocalStorage("find", title)

  }
}
const getDataFindHotel = () => {
  const getIdHotel = inputLocation.dataset.id;
  const getStartDay = startDay.value;
  const getEndDay = endDay.value;
  const getRoom = document.querySelector('.number-room').innerText
  const getCustomer = document.querySelector('.number-customer').innerText
  const data = {
    id: getIdHotel,
    startDay: getStartDay,
    endDay: getEndDay,
    room: getRoom,
    customer: getCustomer
  }
  return data;
}




                // ================================================================================
                // ================================================================================
                // ========================== RESPONSIVE SET UP =================================
                // ================================================================================
                // ================================================================================





