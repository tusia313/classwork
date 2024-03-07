// setInterval() exercise
// Make a countdown timer that will show you the time every
// 1000ms, and stop when we hit zero OR press the button.
const counter = document.querySelector('h1')
const button = document.querySelector('button')


let counting = 10
counter.innerText = counting
let timeId

function startCounting() {
  if (counting > 0) {
    counting--
    counter.innerText = counting
  } 
  else {
    clearInterval(timeId)
  }
}
function stopCounting() {
  clearInterval(timeId)
}

timeId = setInterval(startCounting, 1000)
button.addEventListener('click', stopCounting)

