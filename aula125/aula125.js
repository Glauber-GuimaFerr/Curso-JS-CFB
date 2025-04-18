const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')
const btn_texto = document.getElementById('btn_texto')

const obterDados = () => {
    const endpoint = 'http://localhost:8080'
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        p_temp.innerHTML = "Temperatura: " + dados.temperatura
        p_nivel.innerHTML = "Nível: " + dados.nivel
        p_press.innerHTML = "Pressão: " + dados.pressao
    })
} 

let intervalo = setInterval(obterDados, 3000)

let dados = {
    nome: "Bruno",
    canal: "CFB Cursos",
    curso: "JavaScript"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados = () => {
    const endpoint = 'http://localhost:8080'
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret => {
        console.log(ret)
    })
}

btn_texto.addEventListener('click', (evt) => {
    gravarDados()
})

//O método POST envia a requisição e pode ser feita de forma manual 