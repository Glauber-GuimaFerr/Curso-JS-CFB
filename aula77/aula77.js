const div_data = document.getElementById('div_data')
const data = new Date()


let dia = data.getDate()
dia = dia < 10 ? '0' + dia : dia

let mes = data.getMonth()

mes = mes < 10 ? '0' + mes : mes

const data_r = dia + '/' + mes + '/' + data.getFullYear()

div_data.innerHTML = data_r

console.log(data)
console.log(data.getTime())
console.log(data.toDateString())
console.log(`Mês: ${data.getDate()}`)

//console.log(Date.now())
//console.log(data.getDate())
//console.log(data.getDay())
//console.log(data.getFullYear())
//console.log(data.getHours())
//console.log(data.getMilliseconds())
//console.log(data.getMinutes())
//console.log(data.getMonth())
//console.log(data.getSeconds())
//console.log(data.getTime())
//console.log(data.getTimezoneOffset())
//console.log(data.setDate())
//console.log(data.setMonth())
//console.log(data.setFullYear())
//console.log(data.setHours())
//console.log(data.setMinutes())
//console.log(data.setSeconds())
//console.log(data.setMilliseconds())
//console.log(data.toDateString())

//Data é uma classe interna que permite usar funções relacionadas a datas e horas
//Pode ser chamada de forma estática
//now() retorna um Timestamp (data e hora criptografada)
//toDateString() retorna somente a data