let n = 0
let max = 1000
let pares = 0

while(n < max){
    console.log('CFB Cursos - ' + n)
    if(n > 10){
        break
    }
    n++    
}
console.log('Fim do programa')
n = 0

for(let i = n; i < max; i++){
    console.log('CFB Cursos - ' + i)
    if(i % 2 != 0){
        continue
    }
    pares++
}

console.log('Quantidade de pares: ' + pares)
console.log('Fim do programa')

//Continue pula para a próxima iteração
//Break encerra de vez com a iteração