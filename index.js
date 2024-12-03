
//----------------- JavaScript Basic Problem Solving 1-------------------------

// 1. Create a variable called carName, assign the value Volvo to it.
// let ... = "" ; 
let carName = "Volvo";

//***************************************************************************** */

// 2. On one single line, declare three variables with the following names and values:

// firstName = "John"
// lastName = "Doe"
// age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

// let ... = "John";  // write variable name
// let lastName = "..." //write variable values 
// let ... = ... ; // write variable name and values both 

let firstName = "John", lastName = "Doe", age = 35;

//***************************************************************************** */

// 3. Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

// x = 10;
// y = 5;
// x = ... // what will be the value of x ? 

x = 10;
y = 5;
x *= y;
console.log(x); 

//*************************************************************************** */

// 4. Use comments to describe the correct data type of the following variables:

// let length = 16; // data type ? 
// let lastName = "Johnson"; // data type ? 

// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// };    // data type ? 

let length = 16; // data type: Number
let lastName = "Johnson"; // data type: String
const x = {
  firstName: "John",  
  lastName: "Doe"
}; // data type: Object

//***************************************************************************** */

//  5. Execute the function named myFunction.
 
//  function myFunction() {
//   alert("Hello World!");
// }

// // call the function and see the output 

function myFunction() {
    alert("Hello World!");
  }
  // Call the function
  myFunction();

  //*************************************************************************** */
  
// 6. Create an object called person with name = John, age = 50, Then,
//   access the object to alert("John is 50").

const person = {
    name: "John",
    age: 50
  };
  alert(person.name + " is " + person.age);

  //*************************************************************************** */
  
// 7. The <button> element should do something when someone clicks on it. Try to fix it!
//   <button>Click me.</button> 

//JavaScript
const button = document.querySelector("button");

button.addEventListener("click", function() {
  alert("Button clicked!");
});

//**************************************************************************** */

// --------------------------8. Array Related Question:--------------------------

// 1. Alert the number of items in an array, using the correct Array property: 
// const cars = ["Volvo", "Jeep", "Mercedes"];

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// 2. Change the first item of Brand to "Ford".
// 	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand); 

//***************************************************************************** */

//--------------------------- 9. Math Related Problems:------------------------

    // 1. Use the correct Math method to create a random number.
let randomNumber = Math.random();
console.log(randomNumber); 

// 2. Use the correct Math method to return the largest number of 10 and 20.
let largestNumber = Math.max(10, 20);
console.log(largestNumber);

// 3. Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9);
console.log(squareRoot);

//***************************************************************************** */

// ---------------------10. comparison operator related problems:-----------------

// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;

// alert() ? 
x = 10;
y = 5;
alert(x > y);

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

let age = 16;

alert(age < 18 ? "Too young" : "Old enough");

//------------------------JavaScript Basic Problem Solving 2----------------------

// 1. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77
  
  //**************************************************************************** */

// 2. Write a function to check if a number is even. The function should take a single argument, which is the number to check.
function isEven(num) {
    return num % 2 === 0;
  }
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
  //*************************************************************************** */

  // 3. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30

  //************************************************************************** */
  
  // 4. Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
  function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5

  //************************************************************************** */
  
// 5. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3

  //************************************************************************** */
  
  // 6. Write a function to get the first element of an array. The function should take a single argument, which is the array.
  function getFirstElement(arr) {
    return arr[0];
  }
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"

  //*************************************************************************** */
  
  // 7. Write a function to check if an array is empty. The function should take a single argument, which is the array.
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false

  //*************************************************************************** */
  
  // 8. Write a function to return the factorial of a number. The function should take a single argument, which is the number.
  function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040
  

//************************************************************************** */

// 9. Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"  

  //************************************************************************** */

  // 10. Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"

  //*************************************************************************** */
  
  // 11. Write a function to find the length of a string. The function should take a single argument, which is the string.
  function stringLength(str) {
    return str.length;
  }
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

  //************************************************************************** */
  
  // 12. Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  
  //************************************************************************** */

  // 13. Write a function to get the last element of an array. The function should take a single argument, which is the array.
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"

  //************************************************************************** */
  
  // 14. Write a function to get the first character of a string. The function should take a single argument, which is the string.
  function getFirstCharacter(str) {
    return str[0];
  }
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"

  //************************************************************************** */
  
  // 15. Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
  function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; 
    }
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
  