const long = document.getElementById('long')
const lati = document.getElementById('lati')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
}else{
    console.log('Geolocalização não suportada')
}

function mostrarLocalizacao(pos){
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function erroLocalizacao(){
    console.log('Erro ao obter a localização')
}

//A geolocalização não funciona em versões antigas de navegadores
//navigator.geolocation.getCurrentPosition() retorna o timestamp da localização do dispositivo informado no browser
//A propriedade coords.latitude retorna o valor da latitude
//A propriedade coords.longitude retorna o valor da longitude