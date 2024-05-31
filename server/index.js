const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.put("/users/:documentID", async(req, res => {
    const id = req.params.documentID
    console.log(id)
    const { firstName, lastName } = req.body
    console.log(firstName, lastName)
    options = {
        method: "PUT",
        headers: {
            "X-Cassandra-Token": token,
            accept: "application/json",
            "Content-Type": "application/json"
        },
        data: {
            firstName, lastName
        }
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        console.log(response)
    } catch (error) {
        console.err(err)
    }
}))

app.listen(PORT, () => console.log('listening out to port ' + PORT))

