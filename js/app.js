// POST HTTP request method
// const data = {
//     name: 'Martha Beskid Burger'
// }
// fetch('https://my-burger-api.herokuapp.com/burgers', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
//     .then(response => response.json())
//     .then(data => console.log(data))

// PUT http request
const data = {
    name: 'Martha Beskid Burger',
    restaurant: 'Poland',
    ingredients: ['becon', 'corn', 'onion']
}
fetch('https://my-burger-api.herokuapp.com/burgers/28', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))