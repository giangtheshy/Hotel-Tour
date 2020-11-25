



const filterOverlay = document.querySelector('.filter-container')
const filterBar = document.querySelector('.filter-bar')
const openFilterOverlay = document.querySelector('.open-filter-bar')


window.addEventListener('DOMContentLoaded',()=>{
  openFilterOverlay.addEventListener('click',()=>{
    filterOverlay.classList.add('show-container')
    filterBar.classList.add('show-bar')
    document.addEventListener('click',(e)=>{
      let element = e.target;
      if (element.classList.contains('filter-container')){
        filterOverlay.classList.remove('show-container')
    filterBar.classList.remove('show-bar')
      }
    })
  })
})