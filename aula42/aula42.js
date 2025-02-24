const filtroMaior18 = (valor, indice, ary) => {
    if(valor >= 18){
        return valor
    }
}

const idades = [15, 21, 30, 17, 18, 44, 12, 50]

const maior = idades.filter((val, indice, ary) => {
    if(val >= 18){
        return val
    }
})
const menor = idades.filter((val, indice, ary) => {
    if(val < 18){
        return val
    }
})

console.log(idades)
console.log(maior)
console.log(menor)

//Filter é um método que itera elementos de um Array e permite retornar determinados valores com uma estrutura de controle