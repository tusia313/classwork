// POST HTTP request method
const data = {
    name: 'Martha Beskid Burger'
}
fetch('https://my-burger-api.herokuapp.com/burgers', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => console.log(data))