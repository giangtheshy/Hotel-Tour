


export function filterHotelAllowValue(hotels,value){
  return  hotels.filter(hotel=>{
    value = value.toLowerCase();

    if (hotel.name.toLowerCase().includes(value)){
      return true;
    }
  })

}