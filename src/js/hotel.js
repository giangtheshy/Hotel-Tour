import {
  getLocalStorage,removeLocalStorage
} from '../localstorage/localstorage.js'
import {
  paginate,
  displayButtonPage,
  displayHotels
} from '../UI/displayPaginate.js'

import {flagFind,getHotelFromLocal} from '../filter/findHotel.js'

const filterOverlay = document.querySelector('.filter-container')
const filterBar = document.querySelector('.filter-bar')
const openFilterOverlay = document.querySelector('.open-filter-bar')
const pageBtnsContainer = document.querySelector('.page-btns-container')
const pageBtnCenter = document.querySelector('.page-btn-center')
const hotelsContainer = document.querySelector('.hotels-container')



let index = 0;
let page = [];

window.addEventListener('DOMContentLoaded', () => {

  let hotels;
  if (flagFind===true){
    hotels=getHotelFromLocal();
    setTimeout(setDefaultFind,1000);
  }else{
    hotels = getLocalStorage("hotels")
  }
  
  
  loadPage(hotels);
  eventButtonPage();
  eventOverlayFilter();
  
})

const setDefaultFind=()=>{
  removeLocalStorage("find");
}

function eventOverlayFilter() {
  openFilterOverlay.addEventListener('click', () => {
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
const loadPage = (hotels)=>{
  page= paginate(hotels);
  setupUI();
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