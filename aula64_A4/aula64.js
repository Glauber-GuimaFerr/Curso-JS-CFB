const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')
const f_cor = document.querySelector('#f_cor')
const carros = document.querySelector('#carros')
const btn_addCarro = document.querySelector('#btn_addCarro')

let a_carros = []

const removerCarro = (quem) => {
    a_carros = a_carros.filter((el) => {
        return el.nome != quem      
    })
}

f_tipoMilitar.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})
f_tipoNormal.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
})

const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach((c) => {
        const div = document.createElement('div')
        const btn = document.createElement('button')
        btn.innerHTML = 'remover'
        btn.addEventListener('click', (evt) => {
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            gerenciarExibicaoCarros()
        }) 
        div.setAttribute('class', 'carro')
        div.setAttribute('data-nome', c.nome)
        div.innerHTML = `Nome: ${c.nome}</br>`
        div.innerHTML += `Portas: ${c.portas}</br>`
        if(c.blindagem != undefined && c.municao != undefined){
            div.innerHTML += `Blindagem: ${c.blindagem}</br>`
            div.innerHTML += `Munição: ${c.municao}</br>`
        }
        div.innerHTML += `Cor: ${c.cor}</br>`
        div.appendChild(btn)
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener('click', () => {
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        c.setCor(f_cor.value)
        a_carros.push(c)
    }else{
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        c.setCor(f_cor.value)
        a_carros.push(c)        
    }
    gerenciarExibicaoCarros()
})

class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }

    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Azul")
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao--
        }
    }
}

class Utilitario extends Carro{
    constructor(nome, portas, lugares){
        super(nome, portas)
        this.lugares = lugares
    }    
}

//dataset armazena dados personalizados para um elemento, acessados somente pelo script