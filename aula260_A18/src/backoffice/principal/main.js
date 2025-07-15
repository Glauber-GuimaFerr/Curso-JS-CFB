const serv = sessionStorage.getItem('servidor_node')
const verificarToken = () => {
    const token = sessionStorage.getItem('s_desc_token')
    const endpoint = `${sv}/verificartoken/${token}`
    .fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        if(res.status == 200){
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
    })
}
verificarToken()