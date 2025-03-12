const caixa = document.querySelector('#caixa')

let musicas = new Set(['musica 1', 'musica boa', 'musica 10'])

musicas.add('musica muito legal')
musicas.add('musica 1')
musicas.add('musica 1')
musicas.add('musica 10')

console.log(musicas)

musicas.forEach((el) => {
    caixa.innerHTML += el + '</br>' 
})

for(let m of musicas){
    console.log(m)
}

musicas.delete('musica 1')
musicas.clear()

//A coleção SET vem com construtor, que não permite entradas duplicadas de valores 
//add() adiciona valores para a coleção desde que não sejam repetidos
//delete() remove o elemento da coleção
//clear() limpa a coleção