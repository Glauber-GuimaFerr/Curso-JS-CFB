const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const copy = document.getElementById('tcpy')
const limpar = document.getElementById('tlimpar')
const teclaIgual = document.getElementById('tigual')
const calc_aba = document.getElementById('calc_aba')
const calc = document.getElementById('calc')
const img_aba_calc = document.getElementById('img_aba_calc')

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
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener('click', (evt) => {
    calc.classList.toggle('calc_exibir')   
    if(calc.classList.contains('calc_exibir')){
        img_aba_calc.setAttribute('src', 'img/seta_esquerda.svg')
    }else{
        img_aba_calc.setAttribute('src', 'img/seta_direita.svg')
    } 
})