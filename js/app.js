// .push()
// You are the owner of a farm and you have just acquired a new
// farm animal 🐓! Add your farm animal to the pack by pressing on
// the button.
// Hint: use .querySelector() .push() .addEventListener()
const farm = document.querySelector(".farm")
const buttonElement = document.querySelector("button")
const animals = ["🐷", "🐮", "🐴", "🐑"]
farm.innerHTML = animals
const animal = "🐓"