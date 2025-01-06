//Currying is a technique where a function is broken down into a sequence of functions, each taking a single argument.

// function recursiveCurring(a) {
//Recursive Function Calls:
//The function abc calls itself recursively with the updated value of a until the base condition is met.
//     return function xyz(b) {
//         if (!b) return a
//The condition if (!b) ensures that the recursion stops when b is undefined or another falsy value.
//         return recursiveCurring(a + b)

//     }
// }

// console.log(recursiveCurring(1)(2)(3)(4)(5)())