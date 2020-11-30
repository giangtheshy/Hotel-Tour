


export function getLocalStorage(list){
  return localStorage.getItem(list)?JSON.parse(localStorage.getItem(list)) : [];
}
export function saveLocalStorage(list,valueList){
  let lists = getLocalStorage(list);
    lists=valueList;
 localStorage.setItem(list,JSON.stringify(lists));
}
export function addLocalStorage(list,valueList){
  let lists = getLocalStorage(list);
  lists.push(valueList);
 localStorage.setItem(list,JSON.stringify(lists));
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
export function removeLocalStorage(list){
  
  let lists = [];
  localStorage.setItem(list,JSON.stringify(lists))
}