function assert(bool, message) {
    if (!bool) {
        console.log(message);
        return;
    }
}

function isprime(num) {
    //Pre-Conditions
    assert(num > 0, `The given parameter must be a positive number`);
    assert(Number.isInteger(num), `The given parameter ${num} must be an integer`);
    assert(typeof num === 'number', `The given parameter ${num} must be a number`);
    assert(num !== 0 || num !== 1, `The given parameter is neither prime nor composite`);

    if (num > 1) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                assert(false, `The given number is not a prime number`);
                return;
            }
        }
        return assert(false, `The given number is a prime number`);
    } 
}

isprime(9);
