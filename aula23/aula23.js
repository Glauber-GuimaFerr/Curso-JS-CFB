function soma(...valores){
    let res = 0
    for(v in valores){
        res += valores[v]
    }
    return res
}

console.log(soma(10, 5, 2 , 15, 8))

//Parâmetros rest permitem adicionar infinitos valores 