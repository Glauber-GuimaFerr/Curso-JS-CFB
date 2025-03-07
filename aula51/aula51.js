const valores = [10, 8, 9, 2, 15, 4, 7, 0]
const it_valores = valores[Symbol.iterator]()

const texto = 'YouTube'
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next().value)

console.log(texto)
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())

//Iteradores são objetos que permitem percorrer elementos de uma coleção 
//Arrays, Strings, Map e Sets envolvem coleções iteráveis
//Symbol.iterator cria um iterador para um Array
//next() percorre o Array e verifica se ele chegou no final