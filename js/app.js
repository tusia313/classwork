// const print = async () => 'I have beend printed'

// print().then(response => console.log(response))

// fetch('https://restcountries.com/v3.1/all')

// const response = await fetch('https://restcountries.com/v3.1/all')
// const data = await response.json()
// console.log(data)

async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
        console.log(data)
    }

    catch (error) {
        console.error(error)
    }
}

fetchData()



