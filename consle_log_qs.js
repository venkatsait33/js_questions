// console.log("" == false); //true
//  because of type coercion and check by the reference of value in the memory

// console.log("" === false);//false
// because of check by the value


//console.log(false == 0) // true
// false is equal to 0 in terms of value comparison.

// console.log(1 + undefined); // NaN

// console.log(typeof typeof 1000); // typeof 1000 = number, typeof number = string

// ---------------------------------------------------------

// const arr = [1, 2, 3, 4, 5]
// arr[10] = 100;
// console.log(arr); // [1, 2, 3, 4, 5, empty × 5, 100]
// ---------------------------------------------------------

// console.log(null + 2) // 2
//null: Represents "nothing" or "empty value" and is treated as 0 in arithmetic.

// console.log(undefined + 2) // NaN
//undefined: Indicates the absence of a defined value and results in NaN when involved in arithmetic operations.

// -----------------------------------------------

//console.log(Array(1, 2)) //[1,2]
//When multiple arguments are passed to Array, it creates an array with those arguments as elements.

// console.log(Array(2)) // [<2 empty items>]
//When a single numeric argument is passed to Array, it creates an array with that many empty slots.

// -----------------------------------------------

// NaN comparing with any value (including itself) always returns false.


//NaN Behavior in Comparisons:

// NaN is a special value in JavaScript representing "Not-a-Number."
// By definition, NaN is not equal to any value, including itself or any Boolean(true or false).

// Comparison with true or false(==):
// When using the equality operator (==), JavaScript attempts type coercion to compare values.
//     However, NaN is an exception—it does not coerce to any value during comparisons.

// console.log(NaN == true)

// console.log(NaN == false)

// console.log(NaN == NaN);

// console.log(NaN === NaN);


// if (NaN ) {
//     console.log(" i am there")
// } else {
//     console.log("i am not there")
// }
// i am not there

