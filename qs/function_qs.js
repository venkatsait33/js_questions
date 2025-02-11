
// function myFun() {
//     "use strict"
//  prevents certain actions that are considered bad practices in JavaScript.For example, it disallows the use of undeclared variables.
//  it also makes it easier to write secure code by preventing certain types of errors.
//     xyz = 100
//     console.log(xyz);
// output undefined because xyz is not declared

// }
// console.log(myFun());
// ----------------------------------------------------------------------


// var xyz = 1 + abc
// abc is not declared so it shows undefined
// var abc = 100
// if use var and declared it will show NaN
// console.log(xyz); // NaN
// ----------------------------------------------------------------------

// const data = {
//     name: "sai",
// }
// const abc = [1, 2, 3, 4]
// console.log(delete data);
// console.log(delete abc);
// console.log(delete abc[1]);

// const [x, y] = abc // here x = 1 and y = 2 by destructuring the abc array
// console.log(x, y);

// const a =[]
// const b = []

// console.log(a == b);
// console.log(a === b);
// ---------------------------------------------------------------------

///Higher-order functions are functions that either take other functions as arguments, return functions, or both. These functions are widely used in JavaScript for tasks like transformations, filtering, and more.

// function calculate(operation, a, b) {
//     return operation(a, b); // Invokes the passed function
// }

/// Functions to pass as arguments

// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

/// Using the higher-order function
// console.log(calculate(add, 5, 3));      // Output: 8
// console.log(calculate(multiply, 5, 3)); // Output: 15

// -------------------------------------
// function sum(a = 100, b = 200) {
//     console.log(a + b);
// }
// console.log(sum(null, 20)); // 20 undefined

// function sum1(a = 100, b = 200) {
//     console.log(a + b);

// }
// console.log(sum1(undefined,20)); // 20 undefined

// -------------------------------------

// let a = 5; // a=6
// let b = a++; //b=5 post-increment operator it will update the value of a after the assignment so the value a is 6 and b is 5
// let c = a + b;
// console.log(c) // 11
// -------------------------------------

// var z = 30;
// function baz() {
//     console.log(z);
// }
// baz();
// var z;

// The z variable is hoisted and initialized to 30 before the function is called.
// When baz is executed, it logs the current value of z, which is 30.
// -------------------------------------

// let b = 80;
// setTimeout(() => {
//   console.log(b);
// }, 1000)
// b = 100;

// setTimeout is async function and it will execute after 1 second. it the reference of the element not the value of the element.
// here b=80 declared before the setTimeout function while completion of time b is overwritten by b=100. so it prints b = 100
// -------------------------------------

// let x = 10;
// function foo() {
//   console.log(x);
// }
// foo(); // 10
// -------------------------------------

// let x = 1;
// const obj = {
//     y: 2,
//     getX: function () {
//         return this.x;
//     }
// }
// console.log(obj.getX());

//this in getX: function refers to the obj object.
// Inside the getX method, the this keyword refers to the context in which the method is called.
// When you call obj.getX(), the context is the obj object.
//     However, the obj object does not have a property named x.
// Looking for x Property:
// JavaScript checks for a property named x on the obj object.
// Since x is not found on obj, the method returns undefined.
// Global x is Not Accessed:
// The this keyword in getX does not refer to the global scope, so the global variable x is ignored.
// -------------------------------------

// function text() {
//     return {
//         a:1
//     }
// }
// console.log(typeof text());
//Since text() returns { a: 1 }, which is an object, the typeof operator returns "object".
// -------------------------------------

// let a = 10;
// console.log(a++) // postincrement i will update the value of a after the current expression is evaluated. so the a=10
// console.log(a)// after updating the a value using postincrement, the value of a is 11
// console.log(--a)// it will decrement the value of a before the current expression is evaluated. so the a=10
// -------------------------------------

// const [a, , b] = [1, 2, 3];
// console.log(a, b);
//Destructuring allows you to extract values from arrays or objects and assign them to variables in a single statement.
// if give space while destructuring the value will be calculated as undefined and not return any value.
// -------------------------------------

// let count = 0;
// const increment = () => ++count;
// console.log(typeof increment) //In JavaScript, all functions (including arrow functions) are of type "function".
// console.log(typeof increment()) //The typeof operator checks the type of the returned value, which is a number.
// -------------------------------------

// let x = [10] == [10]
// let y = x ? "true" : "false"
// console.log(y)
//In JavaScript, the equality operator (==) compares objects by reference, not by value.
// [10] creates a new array, and each array has a unique reference.
// Even though the contents of the arrays([10] and[10]) are the same, they are separate objects with different references in memory.
// -------------------------------------

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// const c = "1,2,3"
//console.log(a == b) // false
// its false because the == operator compares the references of the arrays, not their contents.
//console.log(a == c) // true
// The == operator allows type coercion when comparing values of different types. When comparing an array(a) with a string(c), JavaScript coerces the array to a string by calling its toString() method.
// -------------------------------------

// let a = 3;
// let b = new Number(3);
// console.log(a == b) // true
//The == operator checks for equality after performing type coercion.Since a is a primitive number and b is a Number object, JavaScript converts b to its primitive value using the valueOf() method.
//console.log(a === b)  // false
//The === operator checks for strict equality, meaning no type coercion is performed.
//a is a primitive number, and b is an object, so their types are different:
// -------------------------------------

//console.log(1 + +"2" + "2")//32
//The unary + operator is used to convert a string to a number. "2" is a string, and when + is applied, it is converted to the number 2.
//So, "2" becomes 2.
//Now, the value is 3, which is a number, and "2", which is a string.JavaScript converts the number 3 to a string because one of the operands is a string.The result is string concatenation, so "3" + "2" gives "32".
// -------------------------------------

// let arr = [0, 1, 2, 3, 4];
// console.log(arr.length - 3); // 2
//For arr, arr.length will be 5, because there are 5 elements in the array: [0, 1, 2, 3, 4].
//Now, arr.length(which is 5) is subtracted by 3. The result of the expression is 2, so console.log(2) will be executed.


// Handling both normal function calls and curried function calls in one implementation.

// function add(a, b) {
//     if (b) {
//         return a+b
//     } else {
//         return function (b) {
//             return a+b
//         }
//     }
// }

// const sum1 = add(1, 2)
// const sum2 = add(1)(2)

// console.log(sum1, sum2)

//The function add takes two arguments a and b.
// It checks if the second argument b is provided: If b is provided, it immediately returns the sum a + b.
// If b is not provided, it returns a new function that takes b as its argument.This allows for currying.
//-------------------------------------------------------

// function f1(){
//     return 2
// }
// function f2(){
//     return 4
// }

// let a = (f1(), f2())

//The comma operator evaluates multiple expressions and returns the value of the last expression

//console.log(a) // 4

//------------------------------------------------------

// const arr = ['one', 'two', 'three']
// const str = 'hello'

// const res = arr.includes('on')
// const res1 = arr.includes('onetwo')
// const string = arr.includes('ll')

//The includes method checks for an exact match of an element in an array or substring in a string.

// console.log(res) // true
// console.log(res1) // false
// console.log(string) // false


//-----------------------------------------------------

