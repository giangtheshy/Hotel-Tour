import {
  getLocalStorage,removeLocalStorage,saveLocalStorage
} from '../localstorage/localstorage.js'
import {
  paginate,
  displayButtonPage,
  displayHotels
} from '../UI/displayPaginate.js'

import {flagFind,getHotelFromLocal} from '../filter/findHotel.js'

import  {sortingByFunction} from '../sorting/sortByService.js'
import {filterAllowSelected,clearFilter} from '../filter/filterHotel.js'
import {displayMinMaxPrice} from '../UI/display-amount.js'

import {displayPlaceListInput,displayHotelInput} from '../UI/display-place.js'

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

  
  if (flagFind===true){
    hotelsOriginal=getHotelFromLocal();
    saveLocalStorage("find",hotelsOriginal);
    
  }else{
    hotelsOriginal = getLocalStorage("hotels")
  }
  
 
  
  loadPage(hotelsOriginal);
  eventButtonPage();
  eventOverlayFilter();
  sortingByFunction();
})



let filterNewHotel ;
function eventOverlayFilter() {
  let hotels = getLocalStorage("hotels")
  openFilterOverlay.addEventListener('click', () => {
     filterNewHotel=filterBarEvent(hotels);
     
    
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


const setupUI = ()=>{
  
  displayHotels(hotelsContainer,page[index]);
  
  displayButtonPage(pageBtnCenter,page,index);
  
}

export const loadPage = (hotels)=>{ 
    index =0;
  if (hotels.length>0){
    page= paginate(hotels);

    setupUI();
  }else{
    hotelsContainer.innerHTML="";
  }
  totalHotels.innerHTML = `${hotels.length}`
  
}

function eventButtonPage(){
  pageBtnsContainer.addEventListener('click', (e)=>{
    let element = e.target;
    if (element.classList.contains('page-btn-center')) return;
    if (element.classList.contains('page-btn')){
      index = parseInt(element.dataset.index);
      
    }
    if (element.classList.contains('prev-btn')){
      index--;
      if (index<0){
        index =page.length -1;
      }
    }
    if (element.classList.contains('next-btn')){
      index++;
      if (index>page.length-1){
        index=0;
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


export const objElementsSort = {leastService,mostService,oneToFive,fiveToOne,increase,decrease}
 
const inputFilterAllowName = document.querySelector('#filter-allow-name')
const inputRangePrice =document.querySelector('.range-input-price') 
const checkedSale = document.querySelector('#hotel-sale')
const checkedNoneSale = document.querySelector('#hotel-none-sale')
const selectStars = document.querySelectorAll('.filter-allow-stars input')
const selectTypeHotel = document.querySelectorAll(".filter-allow-type input")
const checkedService = document.querySelectorAll('.filter-allow-service input')

export const filterCollection = {inputFilterAllowName,inputRangePrice,checkedSale,checkedNoneSale,selectStars,selectTypeHotel,checkedService}

const filterBarEvent = (hotels)=>{
  displayMinMaxPrice(hotels,inputRangePrice,valueMinRange,valueMaxRange);
  valueOfInputRange.innerText = inputRangePrice.max
  filterAllowSelected(hotels,filterCollection)
  
}


const valueMinRange = document.querySelector('.value-min')
const valueMaxRange = document.querySelector('.value-max')
const valueOfInputRange = document.querySelector('.value-range')
const clearAllFilters = document.querySelector('.clear-all-filter')
const totalHotels = document.querySelector('.total-hotels')




clearAllFilters.addEventListener('click', () => {
  
  clearFilter(filterCollection)
})
inputRangePrice.addEventListener('input',()=>{
  valueOfInputRange.innerText= inputRangePrice.value
})