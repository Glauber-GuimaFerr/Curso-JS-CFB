import {Cxmsg} from '../../utils/cxmsg.js'

const f_email = document.querySelector('#f_email')
const f_senha = document.querySelector('#f_senha')
const btn_login = document.querySelector('#btn_login')
const btn_sign = document.querySelector('#btn_sign')
const primeiroAcesso = document.querySelector('#primeiroAcesso')
const login = document.querySelector('#login')
const f_emaildefsenha = document.querySelector('#f_emaildefsenha')
const btn_fecharPopupDefSenha = document.querySelector('#btn_fecharPopupDefSenha')
const iddefsenha = document.querySelector('#iddefsenha')
const f_senha1 = document.querySelector('#f_senha1')
const f_senha2 = document.querySelector('#f_senha2')
const btn_gravarSenha = document.querySelector('#btn_gravarSenha')

sessionStorage.setItem('n_pessoa_pessoa', '-1')
sessionStorage.setItem('s_nome_pessoa', '-1')
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
                console.log(res.status)
                if(res.status == 200){
                    const endpointNome = `${sv}/userlogin/${email}`
                    fetch(endpointNome)
                    .then(rs => rs.json())
                    .then(rs => {
                        const t1 = Math.random().toString(16).substring(2)
                        const t2 = Math.random().toString(16).substring(2)
                        const t3 = Math.random().toString(16).substring(2)
                        const t4 = Math.random().toString(16).substring(2)
                        const ts = new Date().getTime() + (60000 * 5)

                        const dados = {
                            n_pessoa_token: rs[0].n_pessoa_pessoa,
                            s_desc_token: t1 + t2 + t3 + t4,
                            s_validade_token: ts
                        }

                        const cabecalho = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(dados)
                        }

                        const endpointEnviarToken = `${sv}/entradatoken`
                        fetch(endpointEnviarToken, cabecalho)
                        .then(r => r.json())
                        .then(r => {
                            sessionStorage.setItem('n_token_token', r[0].n_token_token)
                            sessionStorage.setItem('s_desc_token', r[0].s_desc_token)
                        })

                        sessionStorage.setItem('n_pessoa_pessoa', rs[0].n_pessoa_pessoa)
                        sessionStorage.setItem('s_nome_pessoa', rs[0].s_nome_pessoa)
                        sessionStorage.setItem('n_tipopessoa_pessoa', rs[0].n_tipopessoa_pessoa)
                        window.location.href = '../principal/main.html'
                    })
                }else if(res.status == 205){
                    const endpointId = `${sv}/idcadastro/${email}`
                    fetch(endpointId)
                    .then(r => r.json())
                    .then(r => {
                        iddefsenha.value = r[0].n_pessoa_pessoa
                        f_emaildefsenha.value = f_email.value
                        primeiroAcesso.classList.remove('ocultarPopup')
                        login.classList.add('ocultarPopup')
                    })
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

btn_sign.addEventListener('click', (evt) => {
    primeiroAcesso.classList.remove('ocultarPopup')
    login.classList.add('ocultarPopup')
    f_emaildefsenha.value = f_email.value
})

btn_fecharPopupDefSenha.addEventListener('click', (evt) => {
    primeiroAcesso.classList.add('ocultarPopup')
    login.classList.remove('ocultarPopup')
})

btn_gravarSenha.addEventListener('click', (evt) => {
    if(f_emaildefsenha.value != '' && f_senha1.value != '' && f_senha2.value != ''){
        if(f_senha1.value === f_senha2.value){
            const dados = {
                s_email_pessoa: f_emaildefsenha.value,
                s_senha_pessoa: f_senha1.value
            }

            const cabecalho = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            }

            const endpoint = `${sv}/sign/${iddefsenha.value}`
            fetch(endpoint, cabecalho)
            .then(res => {
                if(res.status == 200){
                    primeiroAcesso.classList.add('ocultarPopup')
                    login.classList.remove('ocultarPopup')
                    f_senha.value = f_senha1.value
                    f_senha1.value = ''
                    f_senha2.value = ''
                }
            }) 
        }else{
            const config = {
                titulo: "Erro",
                texto: "Senhas não podem ser diferentes!",
                cor: "#f00",
                tipo: "ok",
                ok: () => {},
                sim: () => {},
                nao: () => {}
            }
            Cxmsg.mostrar(config)
        }
    }else{
        alert('Preencha os campos vazios!')
    }
})