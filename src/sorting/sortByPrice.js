



export const sortIncreaseByPrice = (hotels)=>{
  
  let newHotels = hotels.sort((a,b)=>{
    if (a.sale===true&&b.sale===true){
      return (a.price-a.price*(a.randomNum/100))-(b.price-b.price*(b.randomNum/100))
    }else if(a.sale===false&&b.sale===true){
      return a.price-(b.price-b.price*(b.randomNum/100))
    }else if(a.sale===true&&b.sale===false){
      return (a.price-a.price*(a.randomNum/100))-b.price
    }else if(a.sale===false&&b.sale===false){
      return a.price-b.price
    }
    
  })
  newHotels.forEach(hotel => {
    console.log(hotel.price);
  })
  return newHotels;
}

export const sortDecreaseByPrice = (hotels)=>{
  let newHotels = hotels.sort((a,b)=>{
    if (a.sale===true&&b.sale===true){
      return (b.price-b.price*(b.randomNum/100))-(a.price-a.price*(a.randomNum/100))
    }else if(b.sale===false&&a.sale===true){
      return b.price-(a.price-a.price*(a.randomNum/100))
    }else if(b.sale===true&&a.sale===false){
      return (b.price-b.price*(b.randomNum/100))-a.price
    }else if(a.sale===false&&b.sale===false){
      return b.price-a.price
    }
  })
  return newHotels;
}