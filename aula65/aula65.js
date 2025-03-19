const pessoa = {
    nome: "Bruno",
    canal: "CFB",
    curso: "JavaScript",
    aulas:{
    aula01: "Introdução",
    aula02: "Variáveis",
    aula03: "Condicional"          
    }
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.aulas.aula01)

const string_pessoa = '{"nome":"Bruno","canal":"CFB","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_json_pessoa = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(string_pessoa)

console.log(s_json_pessoa)
console.log(o_json_pessoa)

//É possível atribuir coleções de atributos para um mesmo atributo
//JSON é um formato de dados compacto que permite armazenar e transmitir informações
//stringify() é um método da interface JSON que consegue converter um objeto em uma String JSON
//parse() converte uma String JSON em um objeto