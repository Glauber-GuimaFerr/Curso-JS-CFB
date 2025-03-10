let valores = [1, 2, 3, 4, 5]
const op = [
    (val) => {
        let res = 0
        for(v of val){
            res += v
        }
        return res
    },
    (val) => {
        let res = 1
        for(v of val){
            res *= v
        }
        return res
    },
    (val) => {
        for(v of val){
            console.log(v)
        }
    }  
]

console.log(op[0](valores))
console.log(op[1](valores))
op[2](valores)

let res = document.querySelector('#res')
const btnSum = document.getElementById('sum')
const btnSub = document.getElementById('sub')
const btnMul = document.getElementById('mul')
const btnDiv = document.getElementById('dv')

const operar = [
    (val) => {
        let res = 0
        for(v of val){
            res += v
        }
        return res
    },
    (val) => {
        return val[0] - val[1]
    },
    (val) => {
        let res = 1
        for(v of val){
            res *= v
        }
        return res
    },
    (val) => {
        return val[0] / val[1]
    }  
]

btnSum.addEventListener('click', () => {
    let v1 = parseFloat(document.querySelector('#v1').value)
    let v2 = parseFloat(document.querySelector('#v2').value)
    let nums = [v1, v2]
    res.value = operar[0](nums) 
})

btnSub.addEventListener('click', () => {
    let v1 = parseFloat(document.querySelector('#v1').value)
    let v2 = parseFloat(document.querySelector('#v2').value)
    let nums = [v1, v2]
    res.value = operar[1](nums) 
})

btnMul.addEventListener('click', () => {
    let v1 = parseFloat(document.querySelector('#v1').value)
    let v2 = parseFloat(document.querySelector('#v2').value)
    let nums = [v1, v2]
    res.value = operar[2](nums) 
})

btnDiv.addEventListener('click', () => {
    let v1 = parseFloat(document.querySelector('#v1').value)
    let v2 = parseFloat(document.querySelector('#v2').value)
    let nums = [v1, v2]
    res.value = operar[3](nums) 
})

//É possível adicionar funções em Arrays
//A passagem de parâmetros é feita através do índice e parênteses 