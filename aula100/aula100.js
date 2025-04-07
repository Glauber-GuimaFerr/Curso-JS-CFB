const nome = Symbol('nome')
const numero = Symbol('número')
const corUniforme = Symbol('cor do uniforme')

const Jogador = {
    nome: "j1",
}

    Jogador[numero] = 10,
    Jogador[corUniforme] = "amarelo"

for(p in Jogador){
    console.log(p)
}

console.log(Jogador)
console.log(Jogador.nome)
console.log(Jogador[numero])
console.log(Jogador[corUniforme])

//A propriedade description permite comentar o tipo do valor do Symbol
//Atributos associados ao Symbol só podem ser acessados com notação de acesso direto (hide properties)