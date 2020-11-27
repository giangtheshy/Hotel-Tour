let countRoom = 1;
let countCustomer = 1;

export function setUpDefaultCounter(){
  countRoom = 1;
  countCustomer = 1;
}

export function changeNumber(button) {
  if (countCustomer < 1 || countCustomer > 10 || countRoom < 1 || countRoom > 10) {} else {
    checkButton(button);
  }
}
export function displayAmount(elements) {
  elements.innerHTML = checkElement(elements);
}

function checkElement(element) {
  if (element.classList.contains('number-room')) {
    return countRoom;
  } else {
    return countCustomer;
  }
}

function checkButton(button) {
  
  if (button.classList.contains('decrease-room') && countRoom > 1) {
    countRoom--;
  } else if (button.classList.contains('increase-room') && countRoom < 10) {
    countRoom++;
  } else if (button.classList.contains('decrease-customer') && countCustomer > 1) {
    countCustomer--;
  } else if (button.classList.contains('increase-customer') && countCustomer < 10) {
    countCustomer++;
  }
}


export const displayMinMaxPrice = (hotels,input,min,max)=>{
  const arrayPrice = hotels.map(hotel=>parseFloat(hotel.price).toFixed(2))
  const maxValue = Math.max(...arrayPrice)
  const minValue = Math.min(...arrayPrice)
  input.min = minValue
  input.max =maxValue
  input.value=maxValue
  min.innerHTML = minValue
  max.innerHTML = maxValue
}