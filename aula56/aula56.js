const caixa = document.querySelector('#caixa')

const carros = ['Polo', 'Golf', 'T-Cross', 'HRV']

let ul = `<ul>`
carros.map((el) => {
    ul += `<li>${el}</li>`
})
ul + `</ul>`

const curso = 'JavaScript'
const canal = 'CFB Cursos'
//const frase = 'Este é o curso de ' + curso + ' do canal ' + canal
const frase = `Este é o</br>\n curso de ${curso} do</br>\n canal ${canal}`

console.log(frase)
caixa.innerHTML = ul

//Template Strings facilita o uso das concatenações, permitindo adicionar variáveis dentro de um teste
//O texto é delimitado por crase e as variáveis são declaradas no template ${}
//As quebras de linha do HTML são feitas pela tag </br>
//As quebras de linha do console são feitas pelo template \n