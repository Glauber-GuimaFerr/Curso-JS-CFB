const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelectorAll('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']

function sum(n){
    return n + 1
}

cursos.map((el, chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c' + sum(chave))
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})

//createElement pode criar elementos a partir do DOM
//setAttribute permite adicionar os atributos de um elemento a partir do DOM