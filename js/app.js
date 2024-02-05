// 1. Join these two arrays together and then sort the words by
// longest to shortest.
const primaryColors = ["red", "blue", "yellow"]
const pastelColors = ["lilac", "beige", "azure"]

const allColors = primaryColors.concat(pastelColors)
console.log(allColors)
console.log(allColors.sort((a,b) => b.length - a.length))

// 2. Put the numbers in order and then add the missing ones.
const count = [1, 0, 8, 10, 7, 3, 9, 2]

console.log(count.sort((a,b) => a - b))
count.splice(4, 0, 4, 5, 6)
console.log(count)

// 3. Make a sentence out of this array without the last word.
const words = ["The", "cat", "jumped", "over", "the", "moon", "if"]

words.pop()
console.log(words.join(' '))


// 4. Sort these items in order and remove the odd one out.
const years = ["bed", 1990, 1734, 2022, 1634]

console.log(years.sort((a,b) => a -b))
console.log(years.splice(0, 1))
console.log(years)