const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)
console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)

//Siblings não tem relação com child parents
//children é uma propriedade que retorna um array de childs
//firstElementChild retorna o primeiro child
//lastElementChild retorna o último child
//getRootNode e ownerDocument retornam a raíz da página 