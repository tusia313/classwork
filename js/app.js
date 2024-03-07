const text = document.querySelector('h1')


function showText() {
  setTimeout(() => {
    text.innerText = "Boo!"
  }, 5000)
}
document.addEventListener('click', showText)
