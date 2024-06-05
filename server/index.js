const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

//middleware
app.use(cors())

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

