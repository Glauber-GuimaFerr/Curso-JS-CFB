let nome = String('Brunoooo Pinho Campossssss 1978')
let email = "bruno@bruno.com.br"
let numeros = '1, 10, 100, 1000'
console.log(nome)

console.log(nome.search(/pinho/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig, 'Teste'))

console.log(nome.match(/[a-m|h-z|0-9]/ig))

//Metacaracteres
console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\bP/ig))

//Quantificadores
console.log(nome.match(/o+|s+/ig))
console.log(numeros)
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))

//As Strings de RegEx podem receber mais delimitadores utilizando colchetes e outros símbolos
//As faixas devem ser definidas e separadas por pipe
//O metacaractere '/\d/ig' retorna somente os numerais da String 
//O metacaractere '/\s/ig' retorna os espaços encontrados na String
//O metacaractere '/\bx/ig' retorna os caracteres alfanuméricos da String
//O quantificador '/x+/ig' retorna os caracteres da String mesmo que estejam repetidos
//O quantificador '/xy*/ig' retorna uma disjunção de caracteres da String
//O quantificador '/xy?/ig' é semelhante ao asterisco mas não considera repetições