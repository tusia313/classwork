// .shift() exercise
// Write a function that will remove the first element from the
// top shelf in the fridge every time we click on the fridge.
// Hint: use the following methods and properties:
// .querySelector(), .innerHTML, .shift(), .addEventListener()
const fridge = document.querySelector(".fridge")
const topShelf = document.querySelector("#top-shelf")
const foodItems = ["🍉", "🍊", "🍇", "🍌", "🍍"]
topShelf.innerHTML = foodItems

function removeItem(){
    foodItems.shift()
    topShelf.innerHTML = foodItems
}
fridge.addEventListener('click', removeItem)
