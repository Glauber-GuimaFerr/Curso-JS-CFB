const caixa = document.querySelector('#caixa')

let cores = ['azul', 'verde', 'vermelho', ['claro', 'escuro', 'médio']]
let cursos = ['HTML', 'CSS', 'JavaScript', cores]

cursos[0] = 'C++'

cursos.push('C#')
cursos.unshift('Python')
cursos.shift()
cursos.pop()

console.log(cursos[0])
console.log(cursos[3][1])
console.log(cursos[3][3][2])

cursos.map((el) => {
    let p = document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})
console.log(cursos)

//Arrays são coleções de dados em forma de variáveis de determinado tipo
//Podem receber atribuições para cada elemento
//Podem ser percorridos com o método map
//Um Array pode receber outro Array como coleção, formando uma matriz
//Para indicar o elemento da matriz é necessário 2 colchetes 
//Dicionários ultrapassam as dimensões das matrizes
//push é um método que permite adicionar elementos no final do Array
//pop é um método que remove o último elemento do Array 
//unshift é um método que permite adicionar elementos no início do Array
//shift é um método que remove o primeiro elemento do Array
