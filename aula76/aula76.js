const numero = document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')
const btn_forbidden = document.getElementById('btn_forbidden')

let res = true

btn_forbidden.addEventListener('click', (evt) => {
    res = false
})

btn_promessa.addEventListener('click', (evt) => {
    numero.innerHTML = 'Processando...'
    promessa()
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove('erro')
        numero.classList.add('ok')
    })
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove('ok')
        numero.classList.add('erro')
    })
})

const promessa = () => {
    let promise = new Promise((resolve, reject) => {
        let resultado = res
        let tempo = 3000
    
        setTimeout(() => {
            if(resultado){
                resolve('Deu tudo certo!')
            }else{
                reject('Ops! Deu tudo errado!')
            }
        }, tempo)
    })
    return promise
}

numero.innerHTML = 'Aguardando o clique'

//É possível adicionar promises em funções