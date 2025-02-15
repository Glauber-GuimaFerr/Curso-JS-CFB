const f = function(...valores){
    let res = 0
    for(v of valores){
        res += v
    }
    return res
}

const f2 = new Function('v1', 'v2', 'v3', 'return v1 + v2 + v3')

console.log(f(10, 5))
console.log(f2(10, 5, 15))

//Funções anônimas não possuem nome e são criadas no momento da chamada, atribuídas a variáveis
//Elas também podem funcionar como construtores, se adicionar o termo new e F maiúsculo, além do corpo com Strings 