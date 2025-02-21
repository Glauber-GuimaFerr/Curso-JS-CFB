const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]


caixa1.addEventListener('click', () => {
    console.log('clicou')
})

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        evt.stopPropagation()
        console.log('clicou')
    })
})

//stopPropagation impede que um evento seja executado pelos demais elementos