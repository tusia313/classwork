

function dayPasses() {
    const christmas = new Date("December 24, 2022")
    const today = new Date()
    return (today - christmas)/1000/60/60/24
}

console.log(dayPasses())






