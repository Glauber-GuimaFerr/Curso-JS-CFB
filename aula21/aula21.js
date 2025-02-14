function canal(){
    let n1 = 10
    let n2 = 2
    let res = n1*n2
    if(res % 2 == 0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
    console.log('Linha excluída')
}

let num = canal()
console.log(num)

//Funções com retorno podem ser atribuídas como valores de variáveis