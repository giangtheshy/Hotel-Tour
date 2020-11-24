



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
