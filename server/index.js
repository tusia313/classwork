const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const url = "https://22a8e260-1c21-4d00-a294-1e3a98d82d95-europe-west2.apps.astra.datastax.com/api/rest/v2/namespaces/database_section/collections/users"
const token = "AstraCS:OXScQTBdFpTrNbRMvPHRCyPO:c05aa1f91bdaf3b2594724d586d36a497101ce85f20ce5d2a07d8b3c912b7a56"

app.listen(PORT, () => console.log('listening out to port ' + PORT))

