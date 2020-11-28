import {
  filterHotelAllowValue
} from './search-hotel.js'
import {
  loadPage
} from '../js/hotel.js'
import {getLocalStorage,saveLocalStorage} from '../localstorage/localstorage.js'
const filterAllowSelected = (hotels, collection) => {
  let newHotels;
   document.addEventListener('input', () => {
    // window.location = './hotel.html'
    newHotels = filterHotelAllowValue(hotels, collection.inputFilterAllowName.value)

    newHotels = filterByPrice(newHotels, collection.inputRangePrice.value)
    newHotels = filterBySale(newHotels, collection.checkedSale, collection.checkedNoneSale)
    newHotels = filterByStar(newHotels, collection.selectStars)
    newHotels = filterByType(newHotels, collection.selectTypeHotel)
    newHotels = filterByService(newHotels, collection.checkedService)
    // newH= newHotels;
    loadPage(newHotels)
    saveLocalStorage("find", newHotels)
  })
  
  
}

export const clearFilter = (collection)=>{
  let lists = getLocalStorage('hotels')
  saveLocalStorage("find",lists)
  loadPage(lists);
  collection.inputFilterAllowName.value="";
  collection.inputRangePrice.value=collection.inputRangePrice.max
  collection.checkedSale.checked=false
  collection.checkedNoneSale.checked=false
  collection.selectStars.forEach(item=>{item.checked=false})
  collection.selectTypeHotel.forEach(item=>{item.checked=false})
  collection.checkedService.forEach(item=>{item.checked=false})
}

const filterByPrice = (hotels, value) => {
  return hotels.filter(hotel => {
    if (hotel.price * 1 <= value * 1) {
      return true

    }
  })
}
const filterBySale = (hotels, sale, noneSale) => {

  return hotels.filter(hotel => {
    if (sale.checked === true && hotel.sale === true) {
      return true;
    } else if (noneSale.checked === true && hotel.sale === false) {
      return true;
    } else if (sale.checked === false && noneSale.checked === false) {
      return true;
    }
  })
}
const filterByStar = (hotels, input) => {
  return hotels.filter(hotel => {
    let flag = false;
    let counter = 0
    input.forEach(item => {
      if (item.checked === false) {
        counter++
      }
      if (item.checked === true && item.value === hotel.stars) {

        flag = true
      }
    })
    if (counter === input.length) {
      flag = true
    }
    return flag;
  })
}
const filterByType = (hotels, input) => {
  return hotels.filter(hotel => {
    let flag = false
    let counter = 0
    input.forEach(item => {
      if (item.checked === false) {
        counter++
      }
      if (item.checked === true && item.value === "all") {
        flag = true;
      } else {
        if (item.checked === true && hotel.name.toLowerCase().includes(item.value)) {
          flag = true;
        }
      }
    })
    if (counter === input.length) {
      flag = true
    }
    return flag
  })
}
const filterByService = (hotels, input) => {

  return hotels.filter(hotel => {
    let flag = true

    input.forEach(item => {

      if (item.checked === true && hotel.service[item.value] === false) {
        flag = false
      }
    })

    return flag
  })
}


export {
  filterAllowSelected
}