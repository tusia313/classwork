
// The .forEach() method executes code for every item in an array.
// It will NOT create a new array or change the original array.

// Can you turn all three Pac-men to look left, if we press the
// 'ArrowLeft' button, and turn all three Pac-men to look right
// if we press the 'ArrowRight' button?
// Hint: use .querySelectorAll() e.key .style .addEventListener()

const packMans = document.querySelectorAll('.pac-man')

function movePackman(e) {
    const key = e.key
    console.log(key)
    if (key === 'ArrowLeft') {
        packMans.forEach(packMan => {
            packMan.style.transform = 'rotateY(180deg)'
            packMan.style.left = '20px'
        })
    }
    if (key === 'ArrowRight') {
        packMans.forEach(packMan => {
            packMan.style.transform = 'rotateY(0deg)'
            packMan.style.right = '20px'
        })
    }
}
document.addEventListener('keydown', movePackman)