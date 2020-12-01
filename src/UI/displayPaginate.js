import {
  printStars
} from './display-place.js'


const displayButtonPage = (btnContainer, newHotels, activeIndex) => {
  let btns = newHotels.map((_, index) => {
    return `<button class="page-btn ${activeIndex===index?"active":"null"}" data-index=${index}>${index+1}</button>`
  })
  btnContainer.innerHTML = btns.join("");
}

const paginate = (hotels) => {
  const items = 10;
  const numberOfPage = Math.ceil(hotels.length / items)
  const newHotels = Array.from({
    length: numberOfPage
  }, (_,index) => {
    const start = index * items;
    return hotels.slice(start, start + items);
  })
  return newHotels;
}

const displayHotels = (container, hotels) => {
  let result = "";
  hotels.forEach(hotel => {
    
    
    result += `<div class="hotel-container">
    <div class="hotel-header">
      <div class="hotel-header-left">
        <div class="hotel-title">
          <h2>${hotel.name}</h2>
          <div class="number-stars">${printStars(hotel.stars)}</div>
        </div>
        <div class="hotel-address">
          <i class="fas fa-map-marker-alt"></i> ${hotel.address}
        </div>
      </div>

      <div class="hotel-header-right">
      ${hotel.sale===true?`<div class="sale-box">
      Sale ${hotel.randomNum}%
    </div>`:'<div></div>'}
        
      </div>

    </div>
    <div class="hotel-center">
      <div class="hotel-img">
        <img src=${"."+hotel.img} alt=${hotel.name}>
      </div>
      <div class="hotel-body">
        <div class="service-icons">
        ${checkService(hotel.service.parking,'<span class="parking-icon"><i class="fas fa-parking"></i></span>')}
        ${checkService(hotel.service.meeting,' <span class="meeting-icon"><i class="far fa-handshake"></i></span>')}
        ${checkService(hotel.service.elevator,' <span class="elevator-icon"><i class="far fa-caret-square-left"></i></span>')}
        ${checkService(hotel.service.wifi,' <span class="wifi-icon"><i class="fas fa-wifi"></i></span>')}
        ${checkService(hotel.service.laundry,' <span class="laundry-icon"><i class="fas fa-hands-wash"></i></span>')}
        ${checkService(hotel.service.restaurant,' <span class="restaurant-icon"><i class="fas fa-utensils"></i></span>')}
        ${checkService(hotel.service.receptionist,' <span class="receptionist-icon"><i class="fas fa-people-arrows"></i></span>')}
        ${checkService(hotel.service.shuttle,' <span class="shuttle-icon"><i class="fas fa-shuttle-van"></i></span>')}
        ${checkService(hotel.service.gym,' <span class="gym-icon"><i class="fas fa-dumbbell"></i></span>')}
        ${checkService(hotel.service.event,' <span class="event-icon"><i class="fas fa-gift"></i></span>')}
        ${checkService(hotel.service.carrental,' <span class="carrental-icon"><i class="fas fa-motorcycle"></i></span>')}
        
        </div>
        <div class="hotel-desc">
          ${hotel.desc}
        </div>
        <div class="hotel-pay">
          <div class="hotel-price">

            ${checkSale(hotel.sale,hotel.price,hotel.randomNum)}
          </div>
          <div class="view-room">
            <button class="view-room-btn" data-id=${hotel.id}>Booking </button>
          </div>
        </div>
      </div>
    </div>
  </div>`
  })
  container.innerHTML = result;
}




function checkService(bool, icon) {
  if (bool === true) {
    return icon;
  } else {
    return '';
  }
}

function checkSale(bool, price, sale) {
  if (bool === true) {
    return `<div class="old-price">$${price}</div>
    <div class="new-price">$<span class="get-price">${(price-price*(sale/100)).toFixed(2)}</span></div>
    <div class="note">Early Check-in !</div>`
  } else {
    return `<div class="old-price"></div>
    <div class="new-price">$<span class="get-price">${price}</span></div>
    <div class="note">Make Sure There's Room !</div>`
  }
}

export  {
  paginate,
  displayButtonPage,
  displayHotels
}