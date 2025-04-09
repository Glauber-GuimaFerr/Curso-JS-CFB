let nome = new String('Bruno Pinho Campos')

console.log(nome.startsWith('Pinho'))

console.log(nome.endsWith('Campos'))

console.log(nome.includes('nho'))

console.log(`${nome} `.repeat(4))

console.log(nome.charCodeAt(0))

console.log(String.fromCodePoint(66, 114, 117, 110, 111))

let nome_ts = 'Bruno'
console.log(`Nome: ${nome_ts}`)

//startsWith() verifica se a String começa com os caracteres informados
//endsWith() é o oposto do startsWith()
//includes() verifica se a String possui os caracteres informados
//repeat() repete a String em determinadas vezes
//String.fromCodePoint() retorna uma string de acordo com os códigos passados como parâmetro 