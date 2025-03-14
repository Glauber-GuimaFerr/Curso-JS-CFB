class Carro{
    canal = "CFB Cursos"
    constructor(nome, tipo){
        this.nome = nome
        this.canal = "YouTube"
        if(tipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        }else if(tipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        }else if(tipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        }else{
            this.tipo = "Militar"
            this.velmax = 180
        } 
    }

    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelMax(){
        return this.velmax
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelMax(velmax){
        this.velmax = velmax
    }

    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }

    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log('´´´´´´´´´´´´´´´´´´´´´´')
    }
}

let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Super Luxo', 2)
let c3 = new Carro('Bombadão', 4)
let c4 = new Carro('Carrego Tudo', 3)

c1.setNome('Super Veloz')
c1.setVelMax(500)

c1.info()
c2.info()
c3.info()
c4.info()

console
console.log(c1.getInfo()[0])

//É possível utilizar estruturas de condição nos construtores
//É possível adicionar métodos nas classes, que podem modificar e retornar os atributos
//É possível adicionar propriedades por default