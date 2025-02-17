function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
    
    this.dados_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}

const al1 = new aluno('Bruno', 100)
al1.dados_anonimo()
al1.dados_arrow()

//This permite reutilizar variáveis declaradas e utilizar métodos internos (locais) 
//SetTimeOut cria uma nova instância do this caso não seja uma arrow function