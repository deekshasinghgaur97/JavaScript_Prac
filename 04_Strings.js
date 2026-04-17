const name = "Deeksha"
const repoCount = 50

// onsole.log(name + repoCount );

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//const gameName = new String('deeksha-hc-com')
// console.log(gameName[0]);
//  console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

// const gameName = new String('deeksha-hc-com')
// const newString = gameName.substring(12, 5)
// console.log( newString);

// const anotherString = gameName.slice(12, 5)
// console.log(anotherString);

let str = "Hello World";
// slice uses negative as offset from end
//console.log(str.slice(-5));     // "World"
// substring treats -5 as 0
//console.log(str.substring(-5)); // "Hello World"

//let str = "JavaScript";
// slice returns empty string
// console.log(str.slice(4, 1));      // ""
// substring swaps indices to (1, 4)
// console.log(str.substring(4, 1));  // "ava"


// const newStringOne = "   Deeksha   Gaur   "
//  console.log(newStringOne);
//  console.log(newStringOne.trim());

const url = "https://deeksha.com/deeksha%20%20gaur"

console.log(url.replace('%20%20', '-'))
console.log(url);


 console.log(url.includes('deekshaS'))

// console.log(gameName.split('-'));