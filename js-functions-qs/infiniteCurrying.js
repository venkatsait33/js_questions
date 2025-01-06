//Infinite Currying:
// The function continues to chain until an explicit termination(e.g., calling the function without arguments).

// function infiniteCurry(sum = 0) {
//     return function (num) {
//         if (num === undefined) return sum; // Termination condition
//         sum += num;
//         return infiniteCurry(sum); // Return the same function for chaining
//     };
// }

// Usage:
//console.log(infiniteCurry()(1)(2)(3)(4)()); // Outputs: 10
//console.log(infiniteCurry()(10)(20)(30)()); // Outputs: 60
//console.log(infiniteCurry()()); // Outputs: 0
// if more than two empty () it will given an error of typeerror as infiniteCurry is not a function

