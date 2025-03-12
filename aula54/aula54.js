const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'JavaScript')
mapa.set(10, 'CFB Cursos')
mapa.set(1, 100)
mapa.set('canal', 200)

mapa.delete('1')

console.log(mapa)

let pes = 10
let res = ''
if(mapa.has(pes)){
    res = 'A chave existe na coleção com o valor: ' + mapa.get(pes)
}else{
    res = 'A chave não existe na coleção'
}
res += '<br/> O tamanho da coleção é ' + mapa.size

caixa.innerHTML = mapa.get('curso')
caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})


//A coleção MAP é do tipo chave-valor e precisa ser armazenada na memória
//set() define a chave e valor da coleção MAP 
//get() retorna o valor de acordo com a chave
//has() verifica se a chave existe
//size é uma propriedade que retorna o tamanho da coleção MAP
//delete() remove o elemento da coleção por chave  