const c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

c1.addEventListener('click', (evt) => {
   const el = evt.target
   el.classList.add('destaque')
})

cursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const ele = evt.target
        ele.classList.add('destaque')
        console.log(ele.innerHTML + ' foi clicado')
    })
})

//onclick realiza eventos ao clicar com o mouse sobre o elemento, e pode vir dentro da tag 
//alert exibe uma mensagem na página
//addEventListener permite adicionar eventos em um elemento
//target retorna o elemento que foi interagido