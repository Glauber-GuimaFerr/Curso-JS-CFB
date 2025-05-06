const endpoint = 'http://localhost:3000/contatos'

fetch(endpoint)
.then(res => res.json())
.then(res => {
    console.log(res)
})