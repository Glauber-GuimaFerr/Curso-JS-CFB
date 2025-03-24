const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const copy = document.getElementById('tcpy')
const limpar = document.getElementById('tlimpar')
const teclaIgual = document.getElementById('tigual')
const teste = document.getElementById('teste')

let sinal= false
let decimal = false 
 

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if(evt.target.innerHTML == '.'){
            if(!decimal){
                decimal = true
                if(display.innerHTML == '0'){
                    display.innerHMTL = '0.'
                }else{
                    display.innerHMTL += evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML == '0'){
                display.innerHTML = ''
            }
            display.innerHMTL += evt.target.innerHTML    
        }
        display.innerHTML += evt.target.innerHTML 
    })
})

teclasOp.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if(!sinal){
            sinal = true
            if(display.innerHTML == '0'){
                display.innerHTML = ''
            }
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

teclaIgual.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML) 
    display.innerHTML = res
})

limpar.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = '0' 
})

copy.addEventListener('click', (evt) => {
    teste.select()
    teste.setSelectionRange(0, 99999) //Mobile
    navigator.clipboard.writeText(teste.value)
})

//navigator.clipboard.writeText() são propriedades internas do JavaScript que permitem copiar um conteúdo para a área de transferência 
//select() marca o conteúdo selecionado