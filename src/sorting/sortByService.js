
import {objElementsSort,loadPage} from '../js/hotel.js'
import {sortOneToFiveByStar,sortFiveToOneByStar} from './sortByStar.js'
import {sortIncreaseByPrice,sortDecreaseByPrice} from './sortByPrice.js'
// Main Function Sort

const sortingByFunction = (hotels)=>{
  let newHotels;
  objElementsSort.leastService.addEventListener('click', ()=>{
    newHotels = sortLowToHighByService(hotels);
    loadPage(newHotels);
  })
  objElementsSort.mostService.addEventListener('click', ()=>{
    newHotels = sortHighToLowByService(hotels);
    loadPage(newHotels);
  })
  objElementsSort.oneToFive.addEventListener('click', ()=>{
    newHotels = sortOneToFiveByStar(hotels)
    loadPage(newHotels);
  })
  objElementsSort.fiveToOne.addEventListener('click', ()=>{
    newHotels = sortFiveToOneByStar(hotels)
    loadPage(newHotels);
  })
  objElementsSort.increase.addEventListener('click', ()=>{
    newHotels = sortIncreaseByPrice(hotels)
    loadPage(newHotels);
  })
  objElementsSort.decrease.addEventListener('click', ()=>{
    newHotels = sortDecreaseByPrice(hotels)
    loadPage(newHotels);
  })
  

}







const sortLowToHighByService = (hotels)=>{
  const newHotels = countService(hotels);
  newHotels.sort((a,b)=>a.count-b.count);
  return newHotels;
}
const sortHighToLowByService = (hotels)=>{
  const newHotels = countService(hotels);
  newHotels.sort((a,b)=>b.count-a.count);
  return newHotels;
}
const countService=(hotels) => {
  let numberService = hotels.map(item=>{
    let count = 0;
    for(let i in item.service){
      
      if (item.service[i]===true){
        count++;
      }
    }
    const newHotel = {...item, count};
    return newHotel;
  })
  return numberService;
}

export {sortingByFunction}