const divTodas = [...document.getElementsByTagName('div')]
const cursoTodos = [...document.getElementsByClassName('curso')]
const cursoC1 = [...document.getElementsByClassName('c1')]
const cursoC2 = [...document.getElementsByClassName('c2')]
const cursoEspecial = document.getElementById('c1') 

const query_divTodas = [...document.querySelectorAll('div > p')]
const query_cursoTodos = [...document.querySelectorAll('.curso')]
const query_cursoC1 = [...document.querySelectorAll('.c1, p')]
const query_cursoC2 = [...document.querySelectorAll('.c2')]
const query_cursoEspecial = document.querySelectorAll('#c1[class]')

console.log(query_divTodas)
console.log(query_cursoTodos)
console.log(query_cursoC1)
console.log(query_cursoC2)
console.log(query_cursoEspecial)

//querySelector retorna qualquer elemento independente se for um ID, classe ou tag 
//querySelectorAll retorna coleções com todos os elementos no formato Node List
//É possível especificar mais de um elemento, adicionar subgrupos ou determinar parentes