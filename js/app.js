// Array exercise

// 1. Write function that will change the temperatures from Celsius
// to Fahrenheit.
// eg: getCelsius([100, 5, 25, 10]) returns [212, 41, 77, 50]
// (num x 9/5) + 32 = F
const degrees = [100, 5, 25, 10]
function getCelsius() {
  return degrees.map(degree => (degree * 9/5) + 32)
}
console.log(getCelsius(degrees))

// 2. Using '.join()' and 'length' write a function that will return
// the total number of characters in an array of strings.
// eg: getTotal(['Mirror', 'Balloon', 'Ox']) returns 15

// 3. Using '.some()' write a function that will check an array
// for falsy values.
// eg: checkForFalsy([null, 0, [], -3]) returns true

// 4. Using '.split()', '.filter()', '.includes' and '.length()'
// write a function that will tell you how many vowels there are
// in a sentence.
// eg: vowelCount('I am a little sausage') returns 9.