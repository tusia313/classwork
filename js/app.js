// GET HTTP request method
fetch('https://my-burger-api.herokuapp.com/burgers/9')
    .then(response => response.json())
    .then(data => console.log(data))