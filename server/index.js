const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const env = require('dotenv').config()

//middleware
app.use(cors())

const url = "https://22a8e260-1c21-4d00-a294-1e3a98d82d95-europe-west2.apps.astra.datastax.com/api/rest/v2/namespaces/database_section/collections/users"
const token = process.env.ASTRA_TOKEN
console.log(token)

app.delete("/users/:documentID", async (req,res) => {
    const id = req.params.documentID
    const options = {
        method: "DELETE",
        headers: {
            "X-Cassandra-Token": token
        }
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        console.log(response.status)
    }catch(err){
        console.error(err)
    }
}) 
app.listen(PORT, () => console.log('listening out to port ' + PORT))

