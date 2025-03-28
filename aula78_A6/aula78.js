const div_data = document.getElementById('div_data')
const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? '0' + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? '0' + mes : mes
const data_r = dia + '/' + mes + '/' + data.getFullYear()
div_data.innerHTML = data_r

const div_relogio = document.getElementById('div_relogio')

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? '0' + hora:hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? '0' + minuto:minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? '0' + segundo:segundo
    const hora_completa = hora + ':' + minuto + ':' + segundo
    div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio, 1000)

//setInterval() define um intervalo para determinada função ser executada
//Parênteses deve ser observado