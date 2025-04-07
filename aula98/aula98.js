const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('bruno')
const s4 = Symbol.for('canal')

console.log(s1)
console.log(s2)

console.log(typeof(s1))

console.log(Symbol.keyFor(s3))
console.log(Symbol.keyFor(s4))
console.log(Symbol.keyFor(s1))

console.log(s1 === s2)
console.log(s3 === s4)


//Symbol é um objeto interno que contém um identificador único
//Symbol() retorna um objeto do tipo Symbol 
//Symbol.for() define um valor para o identificador
//Symbol.keyFor() retorna o valor do identificador