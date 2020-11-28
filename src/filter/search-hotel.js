import {
  displayHotelInput
} from '../UI/display-place.js'
import {
  displayAmount,
  changeNumber,
  setUpDefaultCounter
} from '../UI/display-amount.js'

export function filterHotelAllowValue(hotels, value) {
  return hotels.filter(hotel => {
    value = value.toLowerCase();

    if (hotel.name.toLowerCase().includes(value)) {
      return true;
    }
  })

}
export let flagBlockInputBox = false;
export function inputLocationFunc(hotels,listHandleInput,listGetDataInputHotel) {

  listHandleInput.inputLocation.addEventListener('input', () => {

    let value = listHandleInput.inputLocation.value;
    if (value != "") {
      flagBlockInputBox = false;
      listHandleInput.inputBox.style.display = "none";
      listHandleInput.inputBoxEnter.style.display = "block";
    } else {
      flagBlockInputBox = true;
      listHandleInput.inputBox.style.display = "block";
      listHandleInput.inputBoxEnter.style.display = "none";
    }
    let listFilter = filterHotelAllowValue(hotels, value);

    displayHotelInput(listFilter, listHandleInput.hotelList);
    getDataInputHotel(listGetDataInputHotel);
   
  })
  
}

export function bookHotelRoom(buttonAmount,numberAmount) {
  buttonAmount.forEach(button => {
    button.addEventListener('click', e => {
      let btn = e.currentTarget;
      changeNumber(btn);
      numberAmount.forEach(number => {
        displayAmount(number);
      })
    })
  })
}


 function getDataInputHotel(listGetDataInputHotel) {
  listGetDataInputHotel.hotels.forEach(hotel => {
    hotel.addEventListener('click', () => {
      let element = hotel.childNodes[0];
      listGetDataInputHotel.inputLocation.value = element.innerText;
      listGetDataInputHotel.inputLocation.dataset.id = hotel.dataset.id;
      listGetDataInputHotel.inputBoxEnter.style.display = "none";
      listGetDataInputHotel.startDay.focus();
      let nowDate = new Date();
      let nowDay = nowDate.getDate();
      let nowMonth = nowDate.getMonth();
      let nowYear = nowDate.getFullYear();
      listGetDataInputHotel.startDay.value = `${nowYear}-${nowMonth+1}-${nowDay}`;
      listGetDataInputHotel.endDay.value = `${nowYear}-${nowMonth+1}-${nowDay}`;
      listGetDataInputHotel.closeIcon.classList.add('show');
      listGetDataInputHotel.numberBox.classList.add('show');
    })
  })
  setUpDefaultCounter();
  listGetDataInputHotel.numberAmount.forEach(number => {
    displayAmount(number);
  })

}