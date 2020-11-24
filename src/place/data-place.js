
const url = "../place.json"

export let dataJSON;

export function dataJson(){
  fetch(url)
  .then(response => response.json())
  .then(data => {dataJSON= data})
  .catch(err => console.log(err));
}