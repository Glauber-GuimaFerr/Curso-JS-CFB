const btn_menuPrincipal = document.querySelector('#btn_menuPrincipal')
const menuPrincipal = document.querySelector('#menuPrincipal')
const todosmenusprincipais = [...document.querySelectorAll('.btn_menuItem')]
const divid = document.querySelector('#divid')
const divnome = document.querySelector('#divnome')

btn_menuPrincipal.addEventListener('click', (evt) => {
    menuPrincipal.classList.toggle('ocultar')
})

todosmenusprincipais.forEach(e => {
    e.addEventListener('click', (evt) => {
        menuPrincipal.classList.add('ocultar')
    })
})

const n_pessoa_pessoa = sessionStorage.getItem('n_pessoa_pessoa')
const s_nome_pessoa = sessionStorage.getItem('s_nome_pessoa')
divid.innerHTML = `id: ${n_pessoa_pessoa}`
divnome.innerHTML = `nome: ${s_nome_pessoa}` 