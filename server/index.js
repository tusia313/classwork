const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.post('/users', async (req, res) => {
    console.log(req)
    const {firstName, lastName} = req.body
    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            'X-Cassandra-Token': token,
            "Content-Type": "application/json"
        },
        data: {
            firstName, lastName
        }
    }
    try {
        const response = await axios(url, options)
        res.send(response.data)
    } catch (err) {
        console.error(err)
    }
})



app.listen(PORT, () => console.log('listening out to port ' + PORT))

