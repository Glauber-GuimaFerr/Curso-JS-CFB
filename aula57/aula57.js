class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

let p1 = new Pessoa(10)
let p2 = new Pessoa("Asdervardson")
let p3 = new Pessoa("Brenasclartel")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)

//Classes são moldes de objetos
//Objetos são instâncias de classes
//Construtores recebem os parâmetros da classe
//Os atributos podem ser criados com o operador this, mas o encapsulamento vem como default