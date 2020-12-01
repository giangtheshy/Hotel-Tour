import {
  getLocalStorage,
  addLocalStorage,
  saveLocalStorage,
  editLocalStorage
} from '../localstorage/localstorage.js'
import {
  paginate,
  displayButtonPage,
  displayHotels
} from '../UI/displayPaginate.js'

import {
  flagFind,
  getHotelFromLocal
} from '../filter/findHotel.js'

import {
  sortingByFunction
} from '../sorting/sortByService.js'
import {
  filterAllowSelected,
  clearFilter
} from '../filter/filterHotel.js'
import {
  displayMinMaxPrice
} from '../UI/display-amount.js'
import {
  inputLocationFunc,
  bookHotelRoom,
  flagBlockInputBox,
  findListHotel
} from '../filter/search-hotel.js'

import {
  displayPlaceListInput,
  displayHotelInput
} from '../UI/display-place.js'
import {
  getUserCurrentLogin
} from '../User/UserUI.js'
import {displayCartItem} from '../User/cart.js'


const filterOverlay = document.querySelector('.filter-container')
const filterBar = document.querySelector('.filter-bar')
const openFilterOverlay = document.querySelector('.open-filter-bar')
const pageBtnsContainer = document.querySelector('.page-btns-container')
const pageBtnCenter = document.querySelector('.page-btn-center')
const hotelsContainer = document.querySelector('.hotels-container')



let index = 0;
let page = [];
let hotelsOriginal;
window.addEventListener('DOMContentLoaded', () => {

  let allHotels = getLocalStorage("hotels");
  let allPlaces = getLocalStorage("places");
  if (flagFind === true) {
    hotelsOriginal = getHotelFromLocal("find");
    saveLocalStorage("find", hotelsOriginal);

  } else {
    hotelsOriginal = allHotels
  }
  displayPlaceListInput(allPlaces, placesList);
  searchHotel(allHotels);

  loadPage(hotelsOriginal);
  eventButtonPage();
  eventOverlayFilter();
  sortingByFunction();
})



let filterNewHotel;

function eventOverlayFilter() {
  let hotels = getLocalStorage("hotels")
  openFilterOverlay.addEventListener('click', () => {
    filterNewHotel = filterBarEvent(hotels);


    filterOverlay.classList.add('show-container')
    filterBar.classList.add('show-bar')
    document.addEventListener('click', (e) => {
      let element = e.target;
      if (element.classList.contains('filter-container')) {
        filterOverlay.classList.remove('show-container')
        filterBar.classList.remove('show-bar')
      }
    })
  })
}

document.querySelector('.logo-home').addEventListener('click', () => {
  window.location = '../index.html'
})

const setupUI = () => {

  displayHotels(hotelsContainer, page[index]);

  displayButtonPage(pageBtnCenter, page, index);

}

export const loadPage = (hotels) => {
  index = 0;
  if (hotels.length > 0) {
    page = paginate(hotels);

    setupUI();
  } else {
    hotelsContainer.innerHTML = "";
  }
  totalHotels.innerHTML = `${hotels.length}`

}

function eventButtonPage() {
  pageBtnsContainer.addEventListener('click', (e) => {
    let element = e.target;
    if (element.classList.contains('page-btn-center')) return;
    if (element.classList.contains('page-btn')) {
      index = parseInt(element.dataset.index);

    }
    if (element.classList.contains('prev-btn')) {
      index--;
      if (index < 0) {
        index = page.length - 1;
      }
    }
    if (element.classList.contains('next-btn')) {
      index++;
      if (index > page.length - 1) {
        index = 0;
      }
    }
    setupUI();

  })


}

const leastService = document.querySelector('.least-service');
const mostService = document.querySelector('.most-service')
const oneToFive = document.querySelector('.one-to-five')
const fiveToOne = document.querySelector('.five-to-one')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')


export const objElementsSort = {
  leastService,
  mostService,
  oneToFive,
  fiveToOne,
  increase,
  decrease
}

const inputFilterAllowName = document.querySelector('#filter-allow-name')
const inputRangePrice = document.querySelector('.range-input-price')
const checkedSale = document.querySelector('#hotel-sale')
const checkedNoneSale = document.querySelector('#hotel-none-sale')
const selectStars = document.querySelectorAll('.filter-allow-stars input')
const selectTypeHotel = document.querySelectorAll(".filter-allow-type input")
const checkedService = document.querySelectorAll('.filter-allow-service input')

export const filterCollection = {
  inputFilterAllowName,
  inputRangePrice,
  checkedSale,
  checkedNoneSale,
  selectStars,
  selectTypeHotel,
  checkedService
}

const filterBarEvent = (hotels) => {
  displayMinMaxPrice(hotels, inputRangePrice, valueMinRange, valueMaxRange);
  valueOfInputRange.innerText = inputRangePrice.max
  filterAllowSelected(hotels, filterCollection)

}


const valueMinRange = document.querySelector('.value-min')
const valueMaxRange = document.querySelector('.value-max')
const valueOfInputRange = document.querySelector('.value-range')
const clearAllFilters = document.querySelector('.clear-all-filter')
const totalHotels = document.querySelector('.total-hotels')




clearAllFilters.addEventListener('click', () => {

  clearFilter(filterCollection)
})
inputRangePrice.addEventListener('input', () => {
  valueOfInputRange.innerText = inputRangePrice.value
})


const placesList = document.querySelector('.places-list')
const hotelList = document.querySelector('.hotels-list')
const inputContainer = document.querySelector('.input')
const inputLocation = document.querySelector('#input-location')
const inputBox = document.querySelector('.input-box')
const inputBoxEnter = document.querySelector('.input-box-enter')
const startDay = document.querySelector('#start-day')
const endDay = document.querySelector('#end-day')

const numberBox = document.querySelector('.number-box');
const amountPerson = document.querySelector('.amount-person')
const closeIcon = document.querySelector('.amount-person .fa-times')
const buttonAmount = document.querySelectorAll('.button-amount')
const numberAmount = document.querySelectorAll('.number-amount')
const hotels = hotelList.childNodes

const listHandleInput = {
  inputLocation,
  inputBox,
  inputBoxEnter,
  hotelList
}
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

function searchHotel(hotels) {

  inputLocationFunc(hotels, listHandleInput, listGetDataInputHotel)
  bookHotelRoom(buttonAmount, numberAmount);
  findHotelById();
}


amountPerson.addEventListener('click', () => {
  if (numberBox.classList.contains('show')) {
    numberBox.classList.remove('show');
    closeIcon.classList.remove('show')
  } else {
    closeIcon.classList.add('show')
    numberBox.classList.add('show');
  }
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


const findHotel = document.querySelector('.find-hotel');
let flagFindHotel = false;

function findHotelById() {
  findHotel.addEventListener('click', () => {
    numberBox.classList.remove('show');
    closeIcon.classList.remove('show')
    const data = getDataFindHotel();
    if (data.id === "" || data.id === undefined || inputLocation.value === "") {
      alert("Please Enter Hotel !")
    } else {

      const temp = [flagFindHotel, data]
      saveLocalStorage("find", temp);

      let hotelsOriginal = getHotelFromLocal("find")
      saveLocalStorage("find", hotelsOriginal)
      loadPage(hotelsOriginal);
    }
  })
}

const getDataFindHotel = () => {
  const getIdHotel = inputLocation.dataset.id;
  let getStartDay = startDay.value;
  let getEndDay = endDay.value;
  let date = new Date();
  if (!getStartDay){
    getStartDay = `${formatDate(date.getMonth())}/${formatDate(date.getDate())}/${date.getFullYear()}`;
  }
  if (!getEndDay){
    getEndDay = `${formatDate(date.getMonth())}/${formatDate(date.getDate())}/${date.getFullYear()}`;
  }
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
const formatDate = (num)=>{
  num=parseInt(num,10);
  if (num<10){
    num='0'+num;
  }
  return num;
}
placesList.addEventListener('click', (e) => {
  clearFilter(filterCollection)
  findListHotel(e, "place-list");
  let hotelsOriginal = getHotelFromLocal("find")
  saveLocalStorage("find", hotelsOriginal)
  loadPage(hotelsOriginal);
})



const cartOverlay = document.querySelector('.shopping-cart-overlay')
const cartSideBar = document.querySelector('.cart-side-bar')
const toursContainer = document.querySelector('.tours-container')
const setUpCart  = () => {
  let user = getUserCurrentLogin();
  displayCartItem(toursContainer,user.cart)
}
document.addEventListener('click', (e) => {
  let curElement = e.target;
  if (curElement.classList.contains('view-room-btn')) {
    setUpCart();
    let id = curElement.dataset.id;
    let data = getDataFindHotel();
    data.id = id;
    data.checkout = false;
    let user = getUserCurrentLogin();
    if (user.cart.find(hotel => hotel.id === id)) {
      if(user.cart.find(hotel => hotel.id === id).checkout=== true&&!user.cart.some(item=>item.id===id&&item.checkout===false)){
          user.cart.push(data);
          editLocalStorage('users', user)
      }else{

        alert("Hotel Already Exists !")
        cartOverlay.classList.add('show')
        cartSideBar.classList.add('show')
      }
    } else {
      user.cart.push(data);
      editLocalStorage('users', user)
      
    }

  }
})