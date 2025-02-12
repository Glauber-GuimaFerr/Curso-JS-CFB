let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1, ...n2]

const jogador1 = {nome:'Bruno', energia:100, vidas:3, magia:150}
const jogador2 = {nome:'Bruce', energia:100, vidas:5, velocidade:80}
const jogador3 = {...jogador1, ...jogador2}

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 4]

const objs1 = document.getElementsByTagName('div')
const objs2 = [...document.getElementsByTagName('div')]

console.log('n3: ' + n3)
console.log('Tipo de n3: ' + typeof(n3))
console.log(jogador3)
console.log(soma(...valores))
console.log(objs1) //Não possui funções de array
console.log(objs2)
objs2.forEach(element => {
    console.log(element)
})

//[...x] -> Permite transformar um conjunto de elementos em array, independente de seu tipo, absorvendo particularidades e privilegiando o último adicionado