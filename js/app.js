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
const words = ['Mirror', 'Balloon', 'Ox']
function getNumber() {
  const newWord = words.join('').length
  return newWord
}
console.log(getNumber(words))

// 3. Using '.some()' write a function that will check an array
// for falsy values.
// eg: checkForFalsy([null, 0, [], -3]) returns true
const values = [null, 0, [], -3]
function getTrue() {

  return values.some(value => value = true)
}
console.log(getTrue())

// 4. Using '.split()', '.filter()', '.includes' and '.length()'
// write a function that will tell you how many vowels there are
// in a sentence.
// eg: vowelCount('I am a little sausage') returns 9.
const sentence ='I am a little sausage'

function howMany() {
  const volwes = ['a', 'e', 'i', 'o', 'u', 'y']
  const letters = sentence.toLowerCase().split('')
  return letters.filter(letter => volwes.includes(letter)).length
}
console.log(howMany())
