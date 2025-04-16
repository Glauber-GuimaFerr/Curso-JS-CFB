const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener('click', (evt) => {

})

let num = 10
const curso = 'JavaScript'
window.localStorage.setItem('nome', 'Bruno')
localStorage.setItem('canal', 'CFB Cursos')
localStorage.setItem('curso', curso)
alert(localStorage.getItem('nome'))
alert(localStorage.getItem('canal'))
alert(localStorage.getItem('curso'))
alert(localStorage.getItem(localStorage.key(0)))
alert(localStorage.length)
sessionStorage.setItem('aula', 'WebStorage')

//WebStorage se refere ao armazenamento de dados no navegador pelo lado do cliente
//localStorage mantém os dados salvos no navegador após fechar a página
//clear() limpa os dados do localStorage
//sessionStorage guarda os dados no navegador por um determinado período ou até fechar a página