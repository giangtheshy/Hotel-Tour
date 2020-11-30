import {
  validationUserNameRegister,
  validationPasswordRegister,
  checkConfirmPassword,
  validateUserLogin
} from '../User/validation.js'
import {
  checkValueRegister,
  changeIconValidate,logOutAccount
} from '../User/UserUI.js'
import {
  saveLocalStorage,
  getLocalStorage,
  addLocalStorage
} from '../localstorage/localstorage.js'





let flagLogin = false;

const preloader = document.querySelector(".preloader");

window.addEventListener('DOMContentLoaded',()=>{
  initializeUser();
  preloader.classList.add("hide-preloader");

})

const initializeUser = () => {
  let user = getLocalStorage('users').filter(user => user.statusLogin===true)
  if (user.length>0){
    flagLogin = true;
    userManageBtn.classList.add('login')
    userNameTitle.innerHTML=user[0].userName;
  }
}

const userNameLoginBox = document.querySelector('.user-name-login-box')
const passwordLoginBox = document.querySelector('.password-login-box')
const userNameLogin = document.querySelector('.user-name-login')
const passwordLogin = document.querySelector('.password-login')
userNameLogin.addEventListener("focus", () => {
  userNameLoginBox.classList.add('move-top')
})
passwordLogin.addEventListener("focus", () => {
  passwordLoginBox.classList.add('move-top')
})
userNameLogin.addEventListener("focusout", () => {
  if (userNameLogin.value === "") {

    userNameLoginBox.classList.remove('move-top')
  }
})
passwordLogin.addEventListener("focusout", () => {
  if (passwordLogin.value === "") {

    passwordLoginBox.classList.remove('move-top')
  }
})


const userNameRegisterBox = document.querySelector('.user-name-register-box')
const passwordRegisterBox = document.querySelector('.password-register-box')
const passwordRegisterBoxConfirm = document.querySelector('.password-register-box-confirm')
const userNameRegister = document.querySelector('.user-name-register')
const passwordRegister = document.querySelector('.password-register')
const passwordRegisterConfirm = document.querySelector('.password-register-confirm')

const alertRegisterUser = document.querySelector('.user-name-register-box .alert-register')
const alertRegisterPassword = document.querySelector('.password-register-box .alert-register')

userNameRegister.addEventListener("focus", () => {
  alertRegisterUser.classList.add('show-alert')
  userNameRegisterBox.classList.add('move-top')
})
passwordRegister.addEventListener("focus", () => {
  alertRegisterPassword.classList.add('show-alert')
  passwordRegisterBox.classList.add('move-top')
})
passwordRegisterConfirm.addEventListener("focus", () => {
  passwordRegisterBoxConfirm.classList.add('move-top')
})
userNameRegister.addEventListener("focusout", () => {
  alertRegisterUser.classList.remove('show-alert')
  if (userNameRegister.value === "") {

    userNameRegisterBox.classList.remove('move-top')
  }
})
passwordRegister.addEventListener("focusout", () => {
  alertRegisterPassword.classList.remove('show-alert')
  if (passwordRegister.value === "") {

    passwordRegisterBox.classList.remove('move-top')
  }
})
passwordRegisterConfirm.addEventListener("focusout", () => {
  if (passwordRegisterConfirm.value === "") {

    passwordRegisterBoxConfirm.classList.remove('move-top')
  }
})

const loginUserBtn = document.querySelector('.login-user')
const registerUserBtn = document.querySelector('.register-user')
const slideLogin = document.querySelector('.slide-login')

loginUserBtn.addEventListener('click', () => {
  loginUserBtn.classList.add('active')
  registerUserBtn.classList.remove('active')
  slideLogin.classList.remove('show-register')
})

registerUserBtn.addEventListener('click', () => {
  registerUserBtn.classList.add('active')
  loginUserBtn.classList.remove('active')
  slideLogin.classList.add('show-register')
})


const userManageBtn = document.querySelector('.user-manage-btn')
const overlayLogin = document.querySelector(".overlay-login")
const loginContainer = document.querySelector('.login-container')
const userManageBox = document.querySelector('.user-manage-box')
const logoutBtn = document.querySelector('.logout-btn')


userManageBtn.addEventListener('click', () => {
  if (flagLogin===false) {
    overlayLogin.classList.add("show-overlay-login")
    loginContainer.classList.add("show-login-container")
    document.addEventListener('click', (e) => {
      let element = e.target;
      if (element.classList.contains("overlay-login")) {
        closeOverlayLogin();
      }
    })

  }else{
    userManageBox.classList.toggle('show-manage-box')
    logoutBtn.addEventListener('click',()=>{
      flagLogin=false;
      logOutAccount();
      userManageBox.classList.remove('show-manage-box')
      userManageBtn.classList.remove('login')
    })
  }
})

const closeOverlayBtn = document.querySelector('.close-overlay-login')

closeOverlayBtn.addEventListener('click', () => {
  closeOverlayLogin();
})
const closeOverlayLogin = () => {
  overlayLogin.classList.remove("show-overlay-login")
  loginContainer.classList.remove("show-login-container")
}

const slideIconValidateUser = document.querySelector('.user-name-register-box .slide-icon-validate')
const slideIconValidatePassword = document.querySelector('.password-register-box .slide-icon-validate')
const slideIconValidatePasswordConfirm = document.querySelector('.password-register-box-confirm .slide-icon-validate')
const iconValidateUser = document.querySelector('.user-name-register-box .icon-validate-user')
const iconValidatePassword = document.querySelector('.password-register-box .icon-validate-user')
const iconValidatePasswordConfirm = document.querySelector('.password-register-box-confirm .icon-validate-user')
const agreeTermsRegister = document.querySelector('.register-footer .remember-user')

let flagRegisterUser = false,
  flagRegisterPassword = false,
  flagRegisterPasswordConfirm = false;
let listFlagRegister = {
  flagRegisterUser,
  flagRegisterPassword,
  flagRegisterPasswordConfirm
}


userNameRegister.addEventListener('input', () => {
  const value = userNameRegister.value;
  checkValueRegister(value, iconValidateUser)
  const check = validationUserNameRegister(value);
  listFlagRegister.flagRegisterUser = check;
  changeIconValidate(check, slideIconValidateUser)
})
passwordRegister.addEventListener('input', () => {
  const value = passwordRegister.value;
  const valueConfirm = passwordRegisterConfirm.value;
  checkValueRegister(value, iconValidatePassword)
  const check = validationPasswordRegister(value);
  listFlagRegister.flagRegisterPassword = check;
  changeIconValidate(check, slideIconValidatePassword)

  const checkConfirm = checkConfirmPassword(value, valueConfirm);
  changeIconValidate(checkConfirm, slideIconValidatePasswordConfirm)

})
passwordRegisterConfirm.addEventListener('input', () => {
  const value = passwordRegister.value;
  const valueConfirm = passwordRegisterConfirm.value;
  checkValueRegister(valueConfirm, iconValidatePasswordConfirm)
  const check = checkConfirmPassword(value, valueConfirm);
  listFlagRegister.flagRegisterPasswordConfirm = check;
  changeIconValidate(check, slideIconValidatePasswordConfirm)
})

const registerForm = document.querySelector('.register-form form')
const loginForm = document.querySelector('.login-form form')
const userNameTitle = document.querySelector('.user-manage-box .user-name')

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (objAllTrue(listFlagRegister) === true && agreeTermsRegister.checked === true) {
    const userName = userNameRegister.value;
    let password = passwordRegister.value;
    let cart = [];
    let statusLogin = false;
    const id = new Date().getTime().toString();
    const user = {
      id,
      userName,
      password,
      cart,
      statusLogin
    };
    addLocalStorage("users", user);
    alert("Register success !");
    loginUserBtn.classList.add('active')
    registerUserBtn.classList.remove('active')
    slideLogin.classList.remove('show-register')

  } else {
    alert("Please Enter Correct Info and Agree Terms !")
    if (objAllTrue(listFlagRegister) === true && agreeTermsRegister.checked === false) {
      agreeTermsRegister.focus();
      agreeTermsRegister.checked = true;
      return;
    }
  }
})
const objAllTrue = (obj) => {
  for (let prop in obj)
    if (!obj[prop])
      return false;
  return true;
}
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const userName = userNameLogin.value;
  const password = passwordLogin.value;
  const checkUser = validateUserLogin(userName, password)
  if(checkUser){
    flagLogin = true;
    closeOverlayLogin();
    userManageBtn.classList.add('login')
    userNameTitle.innerHTML=userName;
  }else{
    alert("Incorrect ! Enter Again!")
  }
})