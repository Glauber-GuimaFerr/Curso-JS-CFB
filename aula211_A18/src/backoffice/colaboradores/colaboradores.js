/* IDs */
const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoColaborador = document.querySelector('#novoColaborador')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_fecharPopupPesq = document.querySelector('#btn_fecharPopupPesq')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const f_tipoColab = document.querySelector('#f_tipoColab')
const telefones = document.querySelector('#telefones')
const f_fone = document.querySelector('#f_fone')
const f_nome = document.querySelector('#f_nome')
const f_status = document.querySelector('#f_status')
const f_foto = document.querySelector('#f_foto')
const img_foto = document.querySelector('#img_foto')
const f_filtragem = document.querySelector('#f_filtragem')
const pesquisa = document.querySelector('#pesquisa')
const btn_pesq = document.querySelector('#btn_pesq')
const f_pesqId = document.querySelector('#f_pesqId')
const f_pesqNome = document.querySelector('#f_pesqNome')
const f_pesq = document.querySelector('#f_pesq')
const btn_pesquisar = document.querySelector('#btn_pesquisar')

/* Variáveis importantes */
let modojanela = 'n' //n = Novo colaborador | e = Editar novo colaborador
const sv = sessionStorage.getItem('servidor_node') 

/* Funções de filtragem */
f_filtragem.addEventListener('keyup', (evt) => {
    const linhas = [...document.querySelectorAll('.linhaGrid')]
    let input, texto, filtragem
    input = evt.target
    filtragem = input.value.toUpperCase()
    for(let i = 0; i < linhas.length; i++){
        texto = linhas[i].children[1].innerHTML
        if(texto.toUpperCase().indexOf(filtragem) > -1){
            document.getElementById('tituloPopupPesquisar').innerHTML = 'Pesquisar Colaborador'
            linhas[i].classList.remove('ocultarLinhaGrid')
        }else{
            linhas[i].classList.add('ocultarLinhaGrid')
        }
    }
})

btn_fecharPopupPesq.addEventListener('click', (evt) => {
    pesquisa.classList.add('ocultarPopup')
})

btn_pesq.addEventListener('click', (evt) => {
    pesquisa.classList.remove('ocultarPopup')
    f_pesq.focus()
})

f_pesqId.addEventListener('click', (evt) => {
    f_pesq.value = ''
    f_pesq.focus()
})

f_pesqNome.addEventListener('click', (evt) => {
    f_pesq.value = ''
    f_pesq.focus()
})

btn_pesquisar.addEventListener('click', (evt) => {
    let tipo = null
    if(f_pesqId.checked){
        tipo = 'id'
    }else{
        tipo = 'nome'
    }
    
    if(f_pesq.value != ''){
        const endpointpesq = `${sv}/pesquisacolab/${tipo}/${f_pesq.value}`
        fetch(endpointpesq)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        pesquisa.classList.add('ocultarPopup')
    }else{
        alert('Preencha o campo de pesquisa!')
    }
})

/* Função para criar items de telefone */
const criarCxTelefone = (fone, idtel, tipo) => {
    const divTel = document.createElement('div')
    divTel.setAttribute('class', 'tel')

    const numTel = document.createElement('div')
    if(tipo == 'n'){
        numTel.setAttribute('class', 'numTel novoTel')
    }else{
        numTel.setAttribute('class', 'numTel editarTel')
    }
    numTel.innerHTML = fone
    divTel.appendChild(numTel)

    const delTel = document.createElement('img')
    delTel.setAttribute('src', '../../shared/img/delete.svg')
    delTel.setAttribute('class', 'delTel')
    delTel.setAttribute('data-idtel', idtel)
    delTel.addEventListener('click', (evt) => {
        if(idtel != -1){
            if(confirm('A ação será irreversível, deseja excluir este telefone?')){
                const objTel = evt.target
                const idtel = objTel.dataset.idtel
                const endpoint_delTelefone = `${sv}/deletartelefone/${idtel}`
                fetch(endpoint_delTelefone)
                .then(res => {
                    if(res.status == 200){
                        evt.target.parentNode.remove()
                    }
                })
            }
        }else{
            evt.target.parentNode.remove()
        }
    })
    divTel.appendChild(delTel)

    telefones.appendChild(divTel)
}

/* Função para carregar a tabela */
const carregarTodosColabs = () => {
    const endpoint_todoscolaboradores = `${sv}/todosusuarios`
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
            
            const img_status = document.createElement('img')
            if(e.c_status_usuario == 'A'){
                img_status.setAttribute('src', '../../shared/img/on.svg')
            }else{
                img_status.setAttribute('src', '../../shared/img/off.svg')
            }
            img_status.setAttribute('data-idcolab', e.n_usuario_usuario)
            img_status.setAttribute('class', 'icone_op')
            img_status.addEventListener('click', (evt) => {
                const idcolab = evt.target.dataset.idcolab
                if(evt.target.getAttribute('src') == '../../shared/img/on.svg'){
                    const endpoint_mudarStatus = `${sv}/mudarstatuscolab/${idcolab}/I`
                    fetch(endpoint_mudarStatus)
                    .then(res => {
                        if(res.status == 200){
                            evt.target.setAttribute('src', '../../shared/img/off.svg')
                            evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'I'
                        }
                    })
                }else{
                    const endpoint_mudarStatus = `${sv}/mudarstatuscolab/${idcolab}/A`
                    fetch(endpoint_mudarStatus)
                    .then(res => {
                        if(res.status == 200){
                            evt.target.setAttribute('src', '../../shared/img/on.svg')
                            evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'A'
                        }
                    })
                }
            })
            divc5.appendChild(img_status)

            const img_editar = document.createElement('img')
            img_editar.setAttribute('src', '../../shared/img/editar.svg')
            img_editar.setAttribute('class', 'icone_op')
            img_editar.addEventListener('click', (evt) => {
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                modojanela = 'e'
                document.getElementById('tituloPopup').innerHTML = 'Editar Colaborador'
                const endpoint1 = `${sv}/dadoscolab/${id}`
                fetch(endpoint1)
                .then(res => res.json())
                .then(res => {
                    btn_gravarPopup.setAttribute('data-idcolab', id)
                    f_nome.value = res[0].s_nome_usuario
                    f_tipoColab.value = res[0].n_tipousuario_usuario
                    f_status.value = res[0].c_status_usuario
                    img_foto.src = res[0].s_foto_usuario
                    novoColaborador.classList.remove('ocultarPopup')
                })

                const endpoint2 = `${sv}/telefonescolab/${id}`
                fetch(endpoint2)
                .then(res => res.json())
                .then(res => {
                    telefones.innerHTML = ''
                    res.forEach(t => {
                        criarCxTelefone(t.s_numero_telefone, t.n_telefone_telefone, 'e')      
                    })
                })
            })
            divc5.appendChild(img_editar)

            const img_remover = document.createElement('img')
            img_remover.setAttribute('src', '../../shared/img/delete.svg')
            img_remover.setAttribute('class', 'icone_op')
            img_remover.addEventListener('click', (evt) => {
                if(confirm('Deseja excluir este colaborador?')){
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                    const endpoint = `${sv}/deletarcolab/${id}`
                    fetch(endpoint)
                    .then(res => {
                        if(res.status == 200){
                            evt.target.parentNode.parentNode.remove()
                        }
                    })
                }
            })
            divc5.appendChild(img_remover)

            dadosGrid.appendChild(divLinha)
        })
    })
}
carregarTodosColabs()

/* Eventos de botões internos e externos do pop-up principal e conexão de APIs */
const endpoint_tiposColab = `${sv}/tiposcolab`
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
    modojanela = 'n'
    document.getElementById('tituloPopup').innerHTML = 'Novo Colaborador'
    novoColaborador.classList.remove('ocultarPopup')
    f_nome.value = ''
    f_tipoColab.value = ''
    f_status.value = ''
    f_foto.value = ''
    img_foto.setAttribute('src', '#')
    telefones.innerHTML = ''
})

btn_fecharPopup.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt) => {
    const tels = [...document.querySelectorAll('.novoTel')]
    let numTels = []
    tels.forEach(t => {
        numTels.push(t.innerHTML)
    })

    const dados = {
        s_nome_usuario: f_nome.value,
        n_tipousuario_usuario: f_tipoColab.value,
        c_status_usuario: f_status.value,
        s_foto_usuario: img_foto.getAttribute("src"),
        numtelefones: numTels
    }

    const cabecalho = {
        method: modojanela == "n" ? "POST" : "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }

    let endpoint_novoXeditarColab = null
    if(modojanela == 'n'){
        endpoint_novoXeditarColab = `${sv}/novocolab` 
    }else{
        endpoint_novoXeditarColab = `${sv}/editarcolab/${evt.target.dataset.idcolab}`
    }
    fetch(endpoint_novoXeditarColab, cabecalho)
    .then(res => {
        if(res.status == 200){
            if(modojanela == 'n'){
                alert('Novo colaborador gravado!') 
                f_nome.value = ''
                f_tipoColab.value = ''
                f_status.value = ''
                f_foto.value = ''
                img_foto.setAttribute('src', '#')
                telefones.innerHTML = ''
            }else{
                alert('Alterações de colaborador salvas!')
            }
            carregarTodosColabs()
        }else{
            alert('Erro ao gravar dados.')
        }
    })
})

btn_cancelarPopup.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultarPopup')
})

/* Função para adicionar telefones no formulário */
f_fone.addEventListener('keyup', (evt) => {
    if(evt.key == 'Enter'){
        if(evt.target.value.length >= 8){
            criarCxTelefone(evt.target.value, -1, 'n')
            evt.target.value = ''
        }else{
            alert('Número de Telefone inválido!')
        }
    }
})

/* Funções para upload de imagens na base 64 */
const converter_imagem_b64 = (localDestino, arquivoImg) => {
    const obj = arquivoImg
    const reader = new FileReader()
    reader.addEventListener('load', (evt) => {
        localDestino.src = reader.result
    })
    if(obj){
        reader.readAsDataURL(obj)
    }
}

f_foto.addEventListener('change', (evt) => {
    converter_imagem_b64(img_foto, evt.target.files[0]);
})