/*
&& -> and ou conjunção
|| -> or ou disjunção
! -> not ou negação
*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log((n1 > n2) && (n1 > n3))
console.log((n2 < n1) || (n3 < n4))
console.log(!(n3 > n2))

if((n1 > n2)){
    console.log(n1 + " maior que " + n2)
}else{
    console.log(n1 + " menor que " + n2)
}

if((n1 > n2) || (n3 > n4)){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}