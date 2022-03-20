// //simple array 
// const car = ["car1","car2","car3","car4"];
// console.log(car);




// //creating an array then providing an element

// const car = [];
// car[0]= "NANO";
// car[1]= "BMW";
// car[2]= "Safari";
// car[3]= "Volvo";
// car[4]= "Bugati";
// console.log(car);


// //Accesing the array element
// const car = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// console.log(car[4]);



//Converting arrays to string
// const car = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// //console.log(car.toString());
// console.log(car.join());


// //Poping item out of an array
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// cars.pop();
// console.log(cars);
// // let car = cars.pop();
// // console.log(car);





// //Pushing item into an array
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// //cars.push('Lemborgini');
// let length = cars.push('Lemborgini')
// console.log(cars.length);
// console.log(cars);





//Shifting = popping but removes first element
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// cars.shift();
// console.log(cars);
// // let car = cars.pop();
// // console.log(car);



//Unshift = pushing but add to fist place of element
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// //cars.push('Lemborgini');
// let length = cars.unshift('Lemborgini')
// console.log(cars.length);//shows the length of array
// console.log(cars);




// //Changing an element in array
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// cars[1]='jaguar';//change "BMW"---> "jaguar".
// console.log(cars);



// //Deleting an element from array
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// delete cars[0];
// console.log(cars);




// //Concatinating(merging) the array
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// const bike= ['ducati','hyabusa','splender'];

// let machine= cars.concat(bike);
// console.log(machine);




// //Splicing Array(Removing element without leaving holes in array)
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// cars.splice(2,0,'maruti 800','SX-4');// 2 is where new elements should be added, O is how many elements should be removed.
// console.log(cars);




// Slicing Array(Slice out piece of an array to new array)
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// const cars2 = cars.slice(1);
// console.log(cars2);

// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(1);
// // console.log(citrus);






// //Sort array(Sort array alphabaticaly)
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// console.log(cars.sort());


// //Reversing array(Reverse element of an array)
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// console.log(cars.reverse());


// //Math.max to find highest no. in array
// const points = [1,2,54,22,56,123,3];
// console.log(null, Math.max(points));



// //index of in Array(Return the position of specified value)
// const cars = [ 'NANO', 'BMW', 'Safari', 'Volvo', 'Bugati' ];
// console.log(cars.indexOf('Volvo'));



// //Map
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

//  function myFunction(num) {
//   return num * 10;
// };

// console.log(myFunction);








 
const items = [
  {name:'Bike', price:100 },
  {name:'TV', price: 200 },
  {name:'Album', price:10 },
  {name:'Book', price: 5  },
  {name:'Phone', price:500 },
  {name:'Computer', price:1000 },
  {name:'Keyboard', price:25 }

]

// //filter method
// const filteredItems = items.filter((items) => {
//   return items.price <= 100 
// })

// console.log(filteredItems);



// //map method
// const itemNames = items.map((items) => {
//   return items.name 
// })

// console.log(itemNames);




// //find method
// const foundItem = items.find((items) => {
//   return items.name === 'Album' 
// })

// console.log(foundItem);






// //forEach method
// items.forEach((items)=>{
//   console.log(items.price);
// })


function Createbase(baseNumber) {
  return function (N) {
    return baseNumber + N;
    
  }
  
}

var addSix = Createbase(6);
addSix(10);
addSix(21);
