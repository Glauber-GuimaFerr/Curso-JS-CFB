function nome(){
    console.log('CFB Cursos')
}

function soma(){
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}

function mudarTexto(){
    let d1 = document.getElementById('d1')
    let d2 = document.getElementById('d2')
    let d3 = document.getElementById('d3')
    d1.innerHTML = 'CFB Cursos'
    d2.innerHTML = 'CFB Cursos'
    d3.innerHTML = 'CFB Cursos'
}

for(let i = 0; i < 10; i++){ 
    nome()
}

soma()

//Funções do tipo void não precisam de retorno e parâmetros são opcionais