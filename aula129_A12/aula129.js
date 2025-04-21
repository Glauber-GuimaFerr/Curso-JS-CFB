const timer = document.querySelector('#timer')

const tmpini = Date.now()

const contador = () => {
    const tmpatual = Date.now() 
    let cont = tmpatual - tmpini
    let seg = Math.floor(cont/1000)
}

setInterval(contador, 1000)