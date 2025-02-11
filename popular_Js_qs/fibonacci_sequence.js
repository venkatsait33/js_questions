function fibonacci(n) {
    let fib = [0, 1]
    for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2])
    return fib
}

console.log(fibonacci(10))

// What is the Fibonacci Sequence ?

//     The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.
// It starts with 0 and 1.
// The sequence looks like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...