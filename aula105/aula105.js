let nome = String('Bruno Pinho Campos')
console.log(nome)

console.log(nome.search(/pinho/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig, 'Teste'))


//Expressões regulares são um padrão de caracteres utilizados em funções específicas para mudar seus comportamentos 
//A String a ser examinada é delimitada por '/ /' junto à expressão regular
//A RegEx '/x/i' indica que o método não utilizará case sensitive
//match() faz uma pesquisa do caractere e retorna um Array
//A RegEx '/x/g' faz uma pesquisa global do caractere procurado  
//As RegEx podem ser combinadas