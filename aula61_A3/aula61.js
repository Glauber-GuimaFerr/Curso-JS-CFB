const Pessoa = {
    nome: '',
    idade: 0,
    getNome: function(){
        return this.nome
    },
    setNome: function(nome){
        this.nome = nome
    },
    getIdade: function(){
        return this.idade
    },
    setIdade: function(idade){
        this.idade = idade
    }  
}

const botao = document.querySelector('#btn_add')
const card = document.querySelector('.res')

let pessoas = []

const addPessoa = () => {
    card.innerHTML = ''
    pessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${p.getNome()}</br>Idade: ${p.getIdade()}`
        card.appendChild(div)
    })
} 

botao.addEventListener('click', (evt) => {
    const p = Pessoa
    const nome = document.getElementById('f_nome')
    const idade =  document.getElementById('f_idade')
    p['nome'] = nome.value
    p.idade = idade.value
    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoa()
})

//Objetos literais não são independentes quando instanciados na memória, sempre apontando para o mesmo endereço
//Cada atribuição irá sobescrever a anterior
//Atributos podem ser referenciados com '.' ou []