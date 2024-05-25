const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios')


app.get('/', (req, res) => {
    res.send('hello world !!!')
})

app.get('/users', async (req, res) => {
    const options = {
        headers: {
            "X-Cassandra-Token": token
        }
    }
    try {
        const response = await axios(`${url}/?page-size=20`, options)
        res.send(response.data)
    } catch (err) {
        console.error(err)
    }
})

app.get('/users/:documentId', async (req, res) => {
    console.log(req.params.documentId)
    const id = req.params.documentId
    const options = {
        headers: {
            "X-Cassandra-Token": token
        }
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.send(response.data)
    } catch (err) {
        console.error(err)
    }
})

app.listen(PORT, () => console.log('listening out to port ' + PORT))

