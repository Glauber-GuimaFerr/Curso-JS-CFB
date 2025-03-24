const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const power = document.getElementById('ton')
const limpar = document.getElementById('tlimpar')
const teclaIgual = document.getElementById('tigual')

let pw = true
let sinal= false
let decimal = false 
 

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if(evt.target.innerHTML == ','){
            if(!decimal){
                decimal = true
                if(display.innerHTML == '0'){
                    display.innerHMTL = '0,'
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

power.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = '0'
    if(pw){
        pw = false
        display.style.color = "#88aa88"
    }else{
        pw = true
        display.style.color = "black" 
    } 
})

//eval() é uma função interna que realiza operações matemáticas de acordo com interpretações de Strings