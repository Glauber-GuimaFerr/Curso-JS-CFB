const soma = (v1, v2) => {
    let res = v1 + v2
    return res
}

const nome = n => {return n}

const add = n => n += 10 

console.log(soma(10, 5))
console.log(nome('Bruno'))
console.log(add(10))

//Arrow function é um tipo de função anônima com declaração simplificada
//Os parênteses só são utilizados caso haja um ou mais parâmetros 
//As chaves podem ser substituídas por operações sem retorno
//Utilize chaves para blocos de código