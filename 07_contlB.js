//  If Statement
// if ( condition_is_given_here ) {
//     // If the condition is met, 
//     //the code  will get executed.
// }

const num = 5;

if (num > 0) {
    console.log("The number is positive.");
};





// Using If-Else Statement
// Syntax
// if (condition1) {
//     // Executes when condition1 is true
//     else  {
//         // Executes when condition2 is true
//     }
// }



let age = 22;

if (age = 18)
    console.log("The number is positive.");
if(){

}
else

else
    console.log("The number is negative");

if(){

}






// Using Switch Statement
// Syntax

// switch (expression) {
//     case value1: statement1;
//       
//     case value2: statement2;
//         break;
//     .
//     .
//     case valueN: statementN;
//         break;
//     default:
//         statementDefault;
// }



let num = 5;

switch (num) {
    case 0:
        console.log("Number is zero.");
       
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};



// Using the Ternary Operator (Conditional Operator)
// Syntax
// condition ? value if true : value if false

let num = 10;
let result = num >= 0 ? "Positive" : "Negative";
console.log(`The number is ${result}.`);



// Using For loop
// Syntax
// for (statement 1; statement 2; statement 3) {
//     // Code here . . .
// }

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

// Using While loop
// Syntax
// while (condition) {
//     // code block
// }

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Using Do-While loop
// Syntax
// do {
//     // code block
// } while (condition);

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);