const olhos = [...document.getElementsByClassName('olho')]

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener('mousemove', (evt) => {
    posx_mouse = evt.clientX
    posy_mouse = evt.clientY

    const rot = Math.atan2(posy_mouse, posx_mouse) * 180/Math.PI

    olhos.forEach((o) => {
        o.style.transform = 'rotate(' + rot + 'deg)'
    })
})

//'mousemove' configura o evento de movimentação do ponteiro do mouse
//clientX e clientY são propriedades que capturam a posição do mouse
//atan2() retorna o ângulo em radianos do arco tangente de dois coeficientes