const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login = document.querySelector('#btn_login')

let sv = null

const endpoint_config = '../../../config.txt'
fetch(endpoint_config)
.then(res => res.json())
.then(res => {
    sessionStorage.setItem('servidor_node', res.servidor_node)
    sessionStorage.setItem('versao', res.versao)
    sv = res.servidor_node
})

btn_login.addEventListener('click', (evt) => {
    if(sv != null){
        const email = f_email.value
        const senha = f_senha.value
        const endpoint = `${sv}/login/${email}/${senha}`
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            
        })
    }
})