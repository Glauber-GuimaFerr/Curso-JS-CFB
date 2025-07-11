import {Cxmsg} from '../../utils/cxmsg.js'

const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login = document.querySelector('#btn_login')
const primeiroAcesso = document.querySelector('#primeiroAcesso')
const login = document.querySelector('#login')
const f_emaildefsenha = document.querySelector('#f_emaildefsenha')
const btn_fecharPopupDefSenha = document.querySelector('#btn_fecharPopupDefSenha')
const btn_gravarSenha = document.querySelector('#btn_gravarSenha')

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
        const senha = f_senha.value == '' ? '$empty' : f_senha.value
        if(email != ''){
            const endpoint = `${sv}/login/${email}/${senha}`
            fetch(endpoint)
            .then(res => {
                if(res.status == 200){
                    window.location.href = '../principal/main.html'
                }else if(res.status == 205){
                    f_emaildefsenha.value = f_email.value
                    primeiroAcesso.classList.remove('ocultarPopup')
                    login.classList.add('ocultarPopup')
                }else if(res.status == 208){
                    const config = {
                        titulo: "Erro",
                        texto: "Usuário ou senha inválidos!",
                        cor: "#f00",
                        tipo: "ok",
                        ok: () => {},
                        sim: () => {},
                        nao: () => {}
                    }
                    Cxmsg.mostrar(config)
                    f_senha.value = ''
                }
            })
        }else{
            alert('Preencha os campos vazios! [Senha em branco para cadastro]')
        }
    }
})

btn_fecharPopupDefSenha.addEventListener('click', (evt) => {
    primeiroAcesso.classList.add('ocultarPopup')
    login.classList.remove('ocultarPopup')
})