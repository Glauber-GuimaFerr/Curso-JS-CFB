const cursoTodos = [...document.getElementsByClassName('curso')]
const cursoC1 = [...document.getElementsByClassName('c1')]
const cursoC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementsByClassName('curso')[0] 

console.log(cursoTodos)
console.log(c1)
console.log(c2)
console.log(cursoEspecial)

cursoC2.map((el) => {
    el.classList.add('destaque')
})

//getElementsByClassName retornam uma coleção HTML que utilizam classes específicas
//Facilita na obtenção de diferentes grupos de elementos
//Os elementos podem ser identificados por vetor
//classList.add permite adicionar uma nova classe nos elementos