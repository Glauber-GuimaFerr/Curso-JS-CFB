const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML) 

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

arrayElementos.map((e) => {
    e.innerHTML = 'CFB Cursos'
    console.log(e)
})

console.log(arrayElementos)

//<html> é a raíz da página
//Cada tag pode ter diversos descendentes
//DOM controla os elementos da página
//Window é opcional
//getElementById permite manipular um elemento por seu ID
//innerHTML retorna o texto do elemento