const numero = document.getElementById('numero')

let promise = new Promise((resolve, reject) => {
    let resultado = true
    let tempo = 3000

    setTimeout(() => {
        if(resultado){
            resolve('Deu tudo certo!')
        }else{
            reject('Ops! Deu tudo errado!')
        }
    }, tempo)
})

promise.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})

promise.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove('ok')
    numero.classList.add('erro')
})

numero.innerHTML = 'Processando...'

//Operações assíncronas seguem o script mas não garantem respostas imediatas
//Promise é uma callback que garante ao script assíncrono de uma API retornar algo assim que estiver pronto
//Possui parâmetros de validação e tratamento de erros
//then() verifica se a promise funcionou corretamente
//catch() verifica se a promise retornou um erro