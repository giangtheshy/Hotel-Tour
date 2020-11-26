



export function displayPlace(places,container){
  let result = "";
  places.forEach(place => {
    result+=`<div class="destination" >
    <div class="img-container">
      <img src=${place.img} alt=${place.name}>
      <div class="destination-name"><h3>${place.name}</h3></div>
      <div class="find-destination">
        <button class="select-find" data-id=${place.title}><i class="fas fa-search select-find" data-id=${place.title}></i></button>
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
    
    result+= `<li class="hotel-list" data-id=${hotel.id}><div class="hotel-name">${hotel.name}</div><div class="stars">${printStars(hotel.stars)}</div><div class="price">$${hotel.price}</div></li>`
  })
  container.innerHTML=result;
}
export function printStars(num){
  let result = ``;
  for (let i =0 ; i<num ; i++){
    result += `<i class="fas fa-star"></i>`;
  }
  return result;
}