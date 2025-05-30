const btn_gravar = document.querySelector('#btn_gravar')
const btn_cancelar = document.querySelector('#btn_cancelar')
const f_nome = document.querySelector('#f_nome')
const f_celular = document.querySelector('#f_celular')
const f_email = document.querySelector('#f_email')
const f_dtnasc = document.querySelector('#f_dtnasc')

btn_gravar.addEventListener('click', (evt) => {
    const dados = {
        "f_nome": f_nome.value,
        "f_celular": f_celular.value,
        "f_email": f_email.value,
        "f_dtnasc": f_dtnasc.value,
    }

    const cabecalho = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }

    const endpoint = 'http://localhost:3000/addcontatos'
    fetch(endpoint, cabecalho)
    .then(res => {
        if(res.status == 200){
            console.log('OK')
        }else{
            alert('Erro ao gravar novo contato')
        }
    })
})