const documentIdInput = document.querySelector('#document-id')
const firstInput = document.querySelector('#firstName')
const secondInput = document.querySelector('#lastName')
const submitButton = document.querySelector('#update-data')

async function updateData(e) {
    e.preventDefault()
    const id= documentIdInput.value
    const firstName = firstInput.value
    const lastName = secondInput.value

    console.log(id, firstName, lastName)

    options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName, lastName
        })
    }
    try {
        const response = await fetch(`http://localhost:8000/users/${id}`, options)
        console.log(response)
    } catch(err) {
        console.error(err)
    }
}
submitButton.addEventListener('click', updateData)
