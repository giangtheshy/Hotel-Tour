import {getLocalStorage,editLocalStorage} from '../localstorage/localstorage.js'





const validationUserNameRegister = (input)=>{
  const regExp = /^[a-zA-Z](?=.*[@])(?=.*\.)[a-zA-Z0-9@.]{8,30}$/
  
  const check = checkExistUserName(input);
  if (input.match(regExp)&&check===true) {
    return true;
  }else{
    return false;
  }
}
const checkExistUserName = input => {
  const listUsers = getLocalStorage("users")
  if (listUsers.find(user=>user.userName===input)){
    return false;
  }else{
    return true;
  }
}
const checkExistUser = (userName,password) =>{
  const listUsers = getLocalStorage("users")
  const check = listUsers.find(user=>{
    if (user.userName===userName && user.password===password) {
      return true;
    }
  })
  if (check){
    return true;
  }else{
    return false;
  }
}
const validationPasswordRegister = (input)=>{
  const regExp = /^[a-zA-Z][a-zA-Z0-9]{6,15}$/
  if (input.match(regExp)) {
    return true;
  }else{
    return false;
  }
}
const checkConfirmPassword = (value,input)=>{
  if (value===input){
    return true;
  }else{
    return false;
  }
}
const validateUserLogin = (userName,password)=>{
  const check = checkExistUser(userName,password)
  let list = getLocalStorage('users')

  if (check){
    let user = list.filter(user => user.userName===userName)
    user[0].statusLogin = true;
    editLocalStorage('users', ...user);
  }
  return check;
}


export {validationUserNameRegister,validationPasswordRegister,checkConfirmPassword,validateUserLogin,checkExistUser}