const carro = document.getElementById('carro')
const btn_parar = document.getElementById('btn_parar')
const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')

const init = () => {
    carro.style = 'position: relative; left: 0px; width: 100px;'
    taMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let taMax = null

const mover = (dir) => {
    if(dir > 0){
        if(parseInt(carro.style.left) <= taMax){
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
            anima = setTimeout(mover, 20, dir)
        }else{
            clearTimeout(anima)
        }
    }else if(dir < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
            anima = setTimeout(mover, 20, dir)
        }else{
            clearTimeout(anima)
        }
    }
}

btn_parar.addEventListener('click', () => {
    clearTimeout(anima)
})

btn_esquerda.addEventListener('click', () => {
    clearTimeout(anima)
    mover(-1)
})

btn_direita.addEventListener('click', () => {
    clearTimeout(anima)
    mover(1)
})

//window.onload = init 
window.addEventListener('load', init())
window.addEventListener('resize', () => {
    taMax = window.innerWidth - parseInt(carro.style.width)
})

//A propriedade window.innerWidth armazena o tamanho da largura da janela