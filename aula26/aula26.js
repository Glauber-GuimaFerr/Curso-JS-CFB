const soma = (...valores) => {
    const somar = val => {
        let res = 0
        for(v of val){
            res += v
        }
        return res
    }
    return somar(valores)    
}

console.log(soma(10, 5 ,15))
valor = [20, 10, 30]
console.log(soma(...valor))

//Em funções aninhadas é possível retornar valores mais de uma vez