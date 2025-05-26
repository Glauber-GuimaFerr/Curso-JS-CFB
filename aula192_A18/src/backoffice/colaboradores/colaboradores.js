const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoColaborador = document.querySelector('#novoColaborador')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const f_tipoColab = document.querySelector('#f_tipoColab')
const telefones = document.querySelector('#telefones')
const f_fone = document.querySelector('#f_fone')

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

const endpoint_tiposColab = 'http://localhost:3000/tiposcolab'
fetch(endpoint_tiposColab)
.then(res => res.json())
.then(res => {
    f_tipoColab.innerHTML = ''
    res.forEach(e => {
        const opt = document.createElement('option')
        opt.setAttribute('value', e.n_tipousuario_tipousuario)
        opt.innerHTML = e.s_desc_tipousuario
        f_tipoColab.appendChild(opt)
    })
})

btn_add.addEventListener('click', (evt) => {
    novoColaborador.classList.remove('ocultarPopup')
})

btn_fecharPopup.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultarPopup')
})

btn_cancelarPopup.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultarPopup')
})

f_fone.addEventListener('keyup', (evt) => {
    if(evt.key == 'Enter'){
        const divTel = document.createElement('div')
        divTel.setAttribute('class', 'tel')

        const numTel = document.createElement('div')
        numTel.setAttribute('class', 'numTel')
        numTel.innerHTML = evt.target.value
        divTel.appendChild(numTel)

        const delTel = document.createElement('img')
        delTel.setAttribute('src', '../../shared/img/delete.svg')
        delTel.setAttribute('class', 'delTel')
        divTel.appendChild(delTel)

        telefones.appendChild(divTel)

        evt.target.value = ''
    }
})