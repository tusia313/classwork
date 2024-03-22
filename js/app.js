const selectDrop = document.querySelector('#flavor-select')
const submitDrop = document.querySelector('input[type=submit]')

console.log(selectDrop)
console.log(submitDrop)



function handleClick(e) {
  e.preventDefault()
  console.log(selectDrop.value)
}

submitDrop.addEventListener('click', handleClick)