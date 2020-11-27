


const sortOneToFiveByStar = (hotels)=>{
  let newHotels = hotels.sort((a,b)=>a.stars-b.stars)
  return newHotels;
}
const sortFiveToOneByStar = (hotels)=>{
  let newHotels = hotels.sort((a,b)=>b.stars-a.stars)
  return newHotels;
}
export {sortOneToFiveByStar,sortFiveToOneByStar}