const objetos = document.getElementById('objetos')

const computador = {
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    info: function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

computador.info()

computador['monitor'] = '22 polegadas'
computador.placaVideo = 'rtx'
console.log(computador)
console.log(computador['ram'])

const computadores = [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"
    },
    {
        cpu: "i5",
        ram: "16gb",
        hd: "1tb"
    }
]

computadores.forEach((c) => {
    console.log(c)
    const div = document.createElement('div')
    div.innerHTML = c.cpu + '<br>' + c.ram + '<br>' + c.hd
    div.setAttribute('class', 'computador')
    objetos.appendChild(div)
})

//Objetos literais são objetos instanciados sem a presença de uma classe, contendo seus próprios comportamentos e atributos
//Podem ser armazenados em um Array
//Podem receber novos atributos