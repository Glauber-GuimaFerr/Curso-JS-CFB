let nome = new String('Bruno Pinho Campos')
let canal = new String('CFBCursos')

console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charAt(1))

console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))

console.log(nome.indexOf('o'))

console.log(nome.lastIndexOf('o'))

//Uma string é uma instância da classe interna String
//charAt() retorna o caractere do índice da String 
//charCodeAt() retorna o código do caractere do charAt()
//concat() concatena uma String com um conjunto de Strings
//indexOf() retorna o índice do caractere passado, e se não encontrar retorna -1 
//lastIndexOf() retorna a última posição do caractere encontrado