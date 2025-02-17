const converterInt = (e) => parseInt(e)
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)

// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)

// console.log(val)

// let el = document.getElementsByTagName('div')
// el = [...el]
// el.map((e, i) => {
//     e.innerHTML = 'CFB Cursos'
//     console.log(e.innerHTML)
// })
// console.log(el)

// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
// let c = cursos.map((el, i) => {
//     return el'
// })

// console.log(c)

//Map é um método que permite percorrer arrays completamente
//Seu primeiro parâmetro indica o valor desse elemento
//Seu segundo parâmetro indica o índice desse elemento
//Pode ser complementado com array function