
import {getLocalStorage} from '../localstorage/localstorage.js'


const flagFind = getLocalStorage("find")[0];
const getHotelFromLocal = ()=>{
  let lists = getLocalStorage("hotels")
  let dataFind = getLocalStorage("find")
  let hotel;
  if (dataFind[1].hasOwnProperty("id")){
    hotel = lists.filter(item=> item.id==dataFind[1].id)
  }else if(dataFind[1].hasOwnProperty("title")){
    hotel = lists.filter(item=>item.place==dataFind[1].title);
  }
  return hotel;
}

export {flagFind,getHotelFromLocal}
