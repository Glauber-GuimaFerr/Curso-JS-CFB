const valor_padrao = 0

let valor = 0

console.log(valor)

function add(v){
    valor += v
}

add(10)
add(5)

console.log(valor)

function soma(n1 = valor_padrao, n2 = valor_padrao){
    let res
    res = n1 + n2 
    return res
}

let resultado_soma = soma(10, 20) 
console.log(resultado_soma)

//Parâmetros podem receber valores opicionais (default)