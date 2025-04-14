let numeros = () => {
    return [10, 20, 30, 40]
}

let[a, b, c, d] = numeros()

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//Desestruturação consiste numa expressão capaz de extrair dados de um objeto ou Array e associá-los à variáveis distintas
//Para objetos, a desestruturação é indicada por chaves dentro de parênteses
//Variáveis por padrão recebem undefined caso não exista dados análogos 