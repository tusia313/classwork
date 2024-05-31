const documentIdInput = document.querySelector('#document-id')
const firstInput = document.querySelector('#firstName')
const secondInput = document.querySelector('#lastName')
const submitButton = document.querySelector('#update-data')

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

