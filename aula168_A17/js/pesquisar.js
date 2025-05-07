const btn_pesq = document.querySelector('#btn_pesq')
const f_txtpesq = document.querySelector('#f_txtpesq')

btn_pesq.addEventListener('click', (evt) => {
    const valorpesq = f_txtpesq.value
    if(valorpesq == ''){
        alert('Digite a pesquisa!')
        f_txtpesq.focus()
        return
    }
    
    const f_pesq = document.querySelector('input[name = f_pesq]:checked').value
    const endpoint = `http://localhost:3000/pesquisarcontatos/${f_pesq}/${valorpesq}`
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
})