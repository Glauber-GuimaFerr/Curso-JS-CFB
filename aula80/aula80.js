const mat = document.getElementById('mat')

const num = Math.random() * 10
mat.innerHTML = Math.floor(num) + 1 

//Math é uma classe interna que permite realizar funções matemáticas
//Pode ser usada estaticamente
//random() por padrão retorna números entre 0 e 1
//floor() e round() retornam a parte inteira de um número, porém o floor é mais limitado