import {
  getLocalStorage,
  saveLocalStorage
} from '../localstorage/localstorage.js'
import {
  printStars
} from '../UI/display-place.js'
const displayCartItem = (container, cart) => {
  let result = '';
  cart.forEach(item => {
    let hotel = getLocalStorage('hotels').find(hotel => hotel.id === item.id);
    let date = new Date();
    if (item.startDay == "") {
      item.startDay = `${date.getFullYear()}-${formatDate(date.getMonth())}-${formatDate(date.getDate())}`;
    }
    if (item.endDay == "") {
      item.endDay = `${date.getFullYear()}-${formatDate(date.getMonth())}-${formatDate(date.getDate())}`;
    }
    result += `<div class="tour-center" data-id=${item.id}>
    <button class="remove-btn"><i class="remove-btn fas fa-times"></i></button>
    <div class="img-container">
      <div class="checkout-alert ${item.checkout===true?"show":''}" data-id=${item.id}><i class="far fa-check-circle"></i></div>
      <img src=${'.'+hotel.img} alt=${hotel.name}>
    </div>
    <div class="active-center">
      <div class="left-col">
        <div class="hotel-name">
          <h3>${hotel.name}</h3>
        </div>
        <div class="stars">
          ${printStars(hotel.stars)}
        </div>
        
        <div class="room-order">
          <button class="order-btn" ><span><i class="fas fa-key"></i> <span
            class="number-amount number-room">${item.room}</span> Room</span><span><i class="fas fa-user-friends"></i> <span
              class="number-amount number-customer">${item.customer}</span>
            Person </span></button>
        
        </div>
      </div>
      <div class="right-col">
        <div class="date-center">
          <input type="text" name="start-day"   value=${item.startDay} readonly>
          <input type="text" name="end-day"   value=${item.endDay} readonly>
        </div>

        <div class="price-center">
          $ <span class="price">${hotel.price}</span>
        </div>
      </div>
    </div>

  </div>`
  })
  container.innerHTML = result;
}
const formatDate = (num) => {
  num = parseInt(num, 10);
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}
const removeItemFromCart = (user, id) => {
  return user.cart.filter(item => item.id !== id)
}

const displayTotalPrice = (cart) => {
  let total = 0;
  cart.forEach(item => {
    let hotel = getLocalStorage('hotels').find(hotel => hotel.id === item.id);
    const start = new Date(item.startDay);
    const end = new Date(item.endDay)
    const lengthTime = Math.abs(end - start);
    let lengthDay = Math.ceil(lengthTime / (1000 * 60 * 60 * 24))
    if (lengthDay===0) lengthDay=1
    if (item.checkout === false) {
      total += parseInt(hotel.price * item.room * lengthDay);
      console.log(lengthDay);

    }
  })
  return total;
}
const checkoutAllItem = (cart) => {
  cart = cart.map(item => {
    item.checkout=true;
    return item;
  })
  return cart;
}


export {
  displayCartItem,
  removeItemFromCart,
  displayTotalPrice,
  formatDate,checkoutAllItem
}