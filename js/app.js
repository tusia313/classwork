

// Fizz Buzz!
// Print out 100 numbers. BUT if the number is divisible by 5
// you have to replace it with 'buzz'. If the number is divisible by 3
// you have to replace it with 'fizz'. And finally, if the number
// is divisible by both 5 and 3 you have to replace it with 'fizz buzz'


for (let number = 1; number < 101; number++) {

    if (number % 5 === 0 && number % 3 === 0) {
        console.log('fizz buzz')
    } else if (number % 3 === 0) {
        console.log('fizz')
    } else if (number % 5 === 0) {
        console.log('buzz')
    }
    else {
        console.log(number)
    }
    
}











