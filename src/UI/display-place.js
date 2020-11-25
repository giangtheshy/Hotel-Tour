



export function displayPlace(places,container){
  let result = "";
  places.forEach(place => {
    result+=`<div class="destination" data-id=${place.title}>
    <div class="img-container">
      <img src=${place.img} alt=${place.name}>
      <div class="destination-name"><h3>${place.name}</h3></div>
      <div class="find-destination">
        <button><i class="fas fa-search"></i></button>
      </div>
    </div>
  </div>`

  })
  container.innerHTML = result;
}
export function displayPlaceListInput(places,container){
  places.forEach(place => {
    const li = document.createElement('li')
    li.classList.add('place-list');
    li.setAttribute('data-id',`${place.title}`);
    li.textContent = `${place.name}`;
    container.appendChild(li);
  })
}

export function displayHotelInput(hotels,container){
  let result = "";
  hotels.forEach(hotel => {
    
    result+= `<li class="hotel-list" data-id=${hotel.place}><div class="hotel-name">${hotel.name}</div><div class="stars">${printStars(hotel.stars)}</div><div class="price">$${hotel.price}</div></li>`
  })
  container.innerHTML=result;
}
function printStars(num){
  let result = ``;
  for (let i =0 ; i<num ; i++){
    result += `<i class="fas fa-star"></i>`;
  }
  return result;
}