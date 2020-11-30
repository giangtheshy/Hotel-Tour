import {getLocalStorage,saveLocalStorage} from "../localstorage/localstorage.js"



const checkValueRegister = (value,container)=>{
  if (value===""){
    container.style.visibility = "hidden";
  }else{
    container.style.visibility = "visible";
  }
}
const changeIconValidate = (check,slide)=>{
  if (check===true){
    slide.classList.add('change-icon-validate')

  }else{
    slide.classList.remove('change-icon-validate')

  }
}
const logOutAccount = () => {
  let list =getLocalStorage('users').map(user => {
    if (user.statusLogin===true){
      user.statusLogin=false;
    }
    return user;
  })
  saveLocalStorage("users", list);

}
export {checkValueRegister,changeIconValidate,logOutAccount}