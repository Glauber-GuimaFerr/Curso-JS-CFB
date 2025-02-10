"use strict"

function teste(){
    if(true){
        let nome = 'Bruno'
        console.log('Dentro do IF do teste: ' + nome)
    }
    console.log('Dentro de teste: ' + nome)
}

teste()

console.log('Fora de teste: ' + nome)

//Var é global dentro do escopo
//Let é local dentro do escopo
//Casting permite tipagem dinâmica

const name2 = 'CFB Cursos'
name2 = 'Bruno'
console.log(name2)

//Const é uma var imutável 