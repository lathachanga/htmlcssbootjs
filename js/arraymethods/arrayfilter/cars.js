let cars=[{Brand:"Maruthi",model:"Swift",price:600000,color:"White"},
          {Brand:"Maruthi",model:"800",price:8800000,color:"red"},
          {Brand:"Kia",model:"Seltos",price:800000,color:"black"},
          {Brand:"Tata",model:"Nexos",price:500000,color:"grey"},
          {Brand:"Hyndai",model:"i20",price:0800000,color:"blue"},
          {Brand:"BMW",model:"x5",price:3300000,color:"White"},
          {Brand:"VW",model:"polo",price:7400000,color:"red"}, 
          {Brand:"Mahindra",model:"Scorpio",price:600000,color:"White"}]

let new_Cars=cars.filter(function (car){
    return car.price >= 4000000
})
console.log(new_Cars)