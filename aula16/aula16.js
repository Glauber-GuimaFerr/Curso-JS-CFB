const objs = document.getElementsByTagName('div')

let num = [10, 20, 30, 40, 50]

for(let i = 0; i < num.length; i++){
    console.log(num[i])
}

for(n in num){
    console.log(n)
}

for(n of num){
    console.log(n)
}

for(o of objs){
    console.log(o.innerHTML = 'Curso')
}

for(o in objs){
    console.log(objs[o].innerHTML)
    console.log(o)
}

//Length indica o tamanho do array
//For in facilita na percussão de arrays mas precisa indicar o nome 
//For of imprime os valores de índice do array diretamente