let nome = new String('Bruno Pinho Campos')
let nome2 = new String('Bruno Pinho Campo')
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

//localeCompare() faz uma comparação entre duas Strings, se for verdadeiro retorna 0, senão retorna 1 ou -1 (primeira menor que a segunda)
//replace() procura um caractere e substitui por outro
//search() pesquisa a String passada como parâmetro e retorna o índice do caractere
//slice() recortar uma String de acordo com sua posição entre índices
//split() corta os caracteres passados como parâmetros e transforma a String em uma coleção de Array