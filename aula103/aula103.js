let nome = new String('Bruno Pinho Campos')
let nome2 = new String('Bruno Pinho Campo')
let nome3 = new String(nome.toUpperCase())
let canal = new String('CFBCursos')

console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charAt(1))

console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))

console.log(nome.indexOf('o'))

console.log(nome.lastIndexOf('o'))

console.log(nome.localeCompare(nome2))

console.log(nome.replace('o', 'u'))

console.log(nome.search('Pinho'))

let sobrenome = nome.slice(6, 11)
console.log(sobrenome)

let arr_nome = nome.split(' ')
console.log(arr_nome)

let parte1 = nome.substring(6, 11)
console.log(parte1)

let parte2 = nome.substr(6, 5)
console.log(parte2)

console.log(nome.toUpperCase())

console.log(nome3.toLowerCase())

console.log(nome.toLocaleUpperCase())

console.log(nome3.toLocaleLowerCase())

console.log(nome.valueOf())

let num = 10
console.log(typeof(num.toString()))

//substring() funciona diferente do slice(), desconsiderando o último índice
//substr() é um método obsoleto semelhante a substring(), porém ele retorna uma quantidade de caracteres a partir de determinado índice
//toUpperCase() deixa a String em maiúsculas
//toLowerCase() deixa a String em minúsculas
//valueOf() retorna o valor do Array de String
//toString() transforma uma variável em tipo String