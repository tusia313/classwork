let round = 0
let count = 0
let punished = true

loopPunishment: while (punished) {
    round++
    while (punished) {
        count++
        console.log(count + '. I will use camelCase, ' + round)

        if (round >= 4 && count >= 100) {
            console.log("Eat my shorts!")
            break loopPunishment

        } else if (count >= 100) {
            console.log('Round done!')
            count = 0
            break
        }
    }
}









