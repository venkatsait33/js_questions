function isPrime(num) {
    // Prime numbers are greater than 1
    if (num < 2) return false;

    // Check divisibility up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by i, it's not prime
        if (num % i === 0) return false;
    }

    // If no divisors were found, num is prime
    return true;
}

console.log(isPrime(11)); // true
console.log(isPrime(25)); // false
console.log(isPrime(29)); // true
