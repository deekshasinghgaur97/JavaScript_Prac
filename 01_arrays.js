// array
const myArr = [0, 1, 2, 3, 4, 5, 6, true, "Deeksha"]
const myHeros = ["Ram" , "Bhim" , "Hanuman"]

//console.log(myArr[0]);
//console.log(myHeros);

// Array methods

// myArr.push(6)
// myHeros.push("Lakshman")
// myArr.pop()
// console.log(myArr);
// console.log(myHeros);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(19));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let slicedFruits = fruits.slice(0, 3);
console.log(slicedFruits);


//let fruits = ["Apple", "Banana", "Orange", "Grapes"];
// Remove 1 element from index 1 and add "Mango"
fruits.splice(0,0,"Mango");
console.log(fruits);


let str = "Hello World";
// slice uses negative as offset from end
//console.log(str.slice(-5));     // "World"
// substring treats -5 as 0
//console.log(str.substring(-5)); // "Hello World"


//Imp 
// JavaScript arrays are resizable and can contain a mix of different data types. 
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexe
// JavaScript arrays are zero-indexed: the first element of an array is at index 0
// avaScript array-copy operations create shallow copies.
