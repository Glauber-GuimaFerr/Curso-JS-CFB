function* cores(){   
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()
console.log(itc.next().value) //Vermelho
console.log(itc.next().value) //Verde
console.log(itc.next().value) //Azul
console.log(itc.next().value) //Undefined

function* perguntas(){
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value) //Iniciação
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)

function* contador(){
    let i = 0
    while(true){
        yield i++
        if(i > 5){
            break
        }
    }
}

const itr = contador()

for(let c of itr){
    console.log(c)
}

//Funções geradoras são mais autônomas ao serem chamadas ou retornar valores, podendo serem pausadas e retomadas de maneira flexível e assíncrona
//Yield pausa a execução da função mas não sai do código
//Elas possuem iteradores para execução de múltiplas tarefas
//Em casos específicos é necessário iniciar o iterador