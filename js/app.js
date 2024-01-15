// const netflix2022 = 210.32344
// const netflix2021 = 192.4392

// function seeTwoNumber () {
//     const total = netflix2022 + netflix2021
//     return Number(total.toFixed(2))
// }

// console.log(seeTwoNumber())

const meal = 43.23
const drinks = 21.32

function bill () {
    const total = meal + drinks
    return (Number(total) + (Number(total)*0.12)).toFixed(2)
}

console.log(bill())





