document.addEventListener('DOMContentLoaded', () => {
    verificarToken() 
})

const serv = sessionStorage.getItem('servidor_node')
const token = sessionStorage.getItem('s_desc_token')

const renovarToken = (ts, dt) => {
    const dados = {
        s_validade_token: ts + 60000 * 10,
        s_desc_token: dt
    }

    const cabecalho = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }

    const endpoint = `${serv}/renovartoken`
    fetch(endpoint, cabecalho)
}

const verificarToken = () => {
    const endpoint = `${serv}/verificartoken/${token}`
    fetch(endpoint)
    .then(r => r.json())
    .then(r => {
        const validade = r[0].s_validade_token
        const tsatual = new Date().getTime()
        if(validade && tsatual <= validade){
            pagina()
            renovarToken(tsatual, token)
        }else{
            alert('Tempo expirado.')
            const endpointLogoff = `${serv}/deletartoken/${token}`
            fetch(endpointLogoff)
            .then(s => {
                if(s.status == 200){
                    sessionStorage.removeItem('n_pessoa_pessoa')
                    sessionStorage.removeItem('s_nome_pessoa')
                    sessionStorage.removeItem('n_token_token')
                    sessionStorage.removeItem('s_desc_token')
                    window.location.href = '../login/index.html'
                }
            })
        }
    })
}
verificarToken()

const pagina = () => {
    if(sessionStorage.getItem('n_pessoa_pessoa') == '-1'){
        window.location.href = '../login/index.html'
    }

    const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
    const menuPrincipal = document.querySelector('#menuPrincipal')
    const todosmenusprincipais = [...document.querySelectorAll('.btn_menuItem')]
    const divid = document.querySelector('#divid')
    const divnome = document.querySelector('#divnome')
    const btn_logoff = document.querySelector('#btn_logoff')

    btn_menuPrincipal.addEventListener('click', (evt) => {
        menuPrincipal.classList.toggle('ocultar')
    })

    todosmenusprincipais.forEach(e => {
        e.addEventListener('click', (evt) => {
            menuPrincipal.classList.add('ocultar')
        })
    })

    btn_logoff.addEventListener('click', (evt) => {
        sessionStorage.setItem('n_pessoa_pessoa', '-1')
        sessionStorage.setItem('s_nome_pessoa', '-1')
        window.location.href = '../login/index.html'
    })

    const n_pessoa_pessoa = sessionStorage.getItem('n_pessoa_pessoa')
    const s_nome_pessoa = sessionStorage.getItem('s_nome_pessoa')
    divid.innerHTML = `id: ${n_pessoa_pessoa}`
    divnome.innerHTML = `nome: ${s_nome_pessoa}` 
}
pagina()