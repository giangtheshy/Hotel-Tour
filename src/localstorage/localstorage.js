


export function getLocalStorage(list){
  return localStorage.getItem(list)?JSON.parse(localStorage.getItem(list)) : [];
}
export function saveLocalStorage(list,valueList){
 localStorage.setItem(list,JSON.stringify(valueList));
}
export function editLocalStorage(list,value){
  let lists = getLocalStorage(list).map(item=>{
    if (item.id==value.id){
      return value;
    }else{
      return item;
    }
  });
  localStorage.setItem(list,JSON.stringify(lists));
  
}