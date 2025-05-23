const dadosGrid = document.querySelector('#dadosGrid')

const endpoint_todoscolaboradores = 'http://localhost:3000/todosusuarios'
fetch(endpoint_todoscolaboradores)
.then(res => res.json())
.then(res => {
    dadosGrid.innerHTML = ''
    res.forEach(e => {
        const divLinha = document.createElement('div')
        divLinha.setAttribute('class', 'linhaGrid')
        
        const divc1 = document.createElement('div')
        divc1.setAttribute('class', 'colunaLinhaGrid c1')
        divc1.innerHTML = e.n_usuario_usuario
        divLinha.appendChild(divc1)

        const divc2 = document.createElement('div')
        divc2.setAttribute('class', 'colunaLinhaGrid c2')
        divc2.innerHTML = e.s_nome_usuario
        divLinha.appendChild(divc2)

        const divc3 = document.createElement('div')
        divc3.setAttribute('class', 'colunaLinhaGrid c3')
        divc3.innerHTML = e.n_tipousuario_usuario
        divLinha.appendChild(divc3)

        const divc4 = document.createElement('div')
        divc4.setAttribute('class', 'colunaLinhaGrid c4')
        divc4.innerHTML = e.c_status_usuario
        divLinha.appendChild(divc4)

        const divc5 = document.createElement('div')
        divc5.setAttribute('class', 'colunaLinhaGrid c5')
        divLinha.appendChild(divc5)

        dadosGrid.appendChild(divLinha)
    })
})