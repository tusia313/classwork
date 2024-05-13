const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.send('hello world !!!')
})

app.get('/users', (req, res) => {
    res.send('all my users')
})

app.get('/users/:userId', (req, res) => {
    console.log(req.params.userId)
    res.send(req.params.userId)
})

app.listen(PORT, () => console.log('listening out to port ' + PORT))