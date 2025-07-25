import {Cxmsg} from '../../utils/cxmsg.js'

/* IDs */
const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoFornecedor = document.querySelector('#novoFornecedor')

const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_fecharPopupPesq = document.querySelector('#btn_fecharPopupPesq')
const btn_fecharPopupListaContatos = document.querySelector('#btn_fecharPopupListaContatos')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')

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
const btn_listarTudo = document.querySelector('#btn_listarTudo')

const listaContatosFornecedores = document.querySelector('#listaContatosFornecedores')
const btn_listarContatosFornecedores = document.querySelector('#btn_listarContatosFornecedores')
const dadosGrid_novosContatosFornecedores = document.querySelector('#dadosGrid_novosContatosFornecedores')
const dadosGrid_contatosFornecedoresAdd = document.querySelector('#dadosGrid_contatosFornecedoresAdd')

const telefonesContatosFornecedores = document.querySelector('#telefonesContatosFornecedores')
const btn_fecharPopupTelefonesContatosFornecedores = document.querySelector('#btn_fecharPopupTelefonesContatosFornecedores')
const dadosGrid_telefonesContatosFornecedores = document.querySelector('#dadosGrid_telefonesContatosFornecedores')

/* Variáveis importantes */
let modojanela = 'n' //n = Novo fornecedor | e = Editar novo fornecedor
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
            document.getElementById('tituloPopupPesquisar').innerHTML = 'Pesquisar Fornecedor'
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
    f_pesq.value = ''
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
        const endpointpesq = `${sv}/pesquisafornecedor/${tipo}/${f_pesq.value}`
        fetch(endpointpesq)
        .then(res => res.json())
        .then(res => {
            dadosGrid.innerHTML = ''
            res.forEach(e => {
                criarLinha(e)
            })
        })
        pesquisa.classList.add('ocultarPopup')
    }else{
        const config = {
            titulo: "Alerta",
            texto: "Preencha o campo de pesquisa! Digite o nome ou ID do fornecedor.",
            cor: "#008",
            tipo: "ok",
            ok: () => {},
            sim: () => {},
            nao: () => {}
        }
        Cxmsg.mostrar(config)
    }
})

btn_fecharPopupListaContatos.addEventListener('click', (evt) => {
    listaContatosFornecedores.classList.add('ocultarPopup')
})

btn_listarContatosFornecedores.addEventListener('click', (evt) => {
    listaContatosFornecedores.classList.remove('ocultarPopup')
    const mzi = maiorZIndex() + 1
    listaContatosFornecedores.setAttribute('style', `z-index: ${mzi} !important;`)
    dadosGrid_novosContatosFornecedores.innerHTML = ''
    const endpoint = `${sv}/todaspessoasfornecedores`
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        res.forEach(e => {
            criarLinhaContForn(e)
        })
    })
})

btn_listarTudo.addEventListener('click', (evt) => {
    carregarTodosFornecedores()
})

/* Funções para carregar a tabela */
const carregarTodosFornecedores = () => {
    const endpoint = `${sv}/todosfornecedores`
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        dadosGrid.innerHTML = ''
        res.forEach(e => {
            criarLinha(e)
        })
    })
}
carregarTodosFornecedores()

const criarLinha = (e) => {
    const divLinha = document.createElement('div')
    divLinha.setAttribute('class', 'linhaGrid')
    
    const divc1 = document.createElement('div')
    divc1.setAttribute('class', 'colunaLinhaGrid c1')
    divc1.innerHTML = e.n_fornecedor_fornecedor
    divLinha.appendChild(divc1)

    const divc2 = document.createElement('div')
    divc2.setAttribute('class', 'colunaLinhaGrid c2')
    divc2.innerHTML = e.s_desc_fornecedor
    divLinha.appendChild(divc2)

    const divc3 = document.createElement('div')
    divc3.setAttribute('class', 'colunaLinhaGrid c3')
    divc3.innerHTML = e.c_status_fornecedor
    divLinha.appendChild(divc3)

    const divc4 = document.createElement('div')
    divc4.setAttribute('class', 'colunaLinhaGrid c4')
    divLinha.appendChild(divc4)
    
    const img_status = document.createElement('img')
    if(e.c_status_fornecedor == 'A'){
        img_status.setAttribute('src', '../../shared/img/on.svg')
    }else{
        img_status.setAttribute('src', '../../shared/img/off.svg')
    }
    img_status.setAttribute('data-idfornecedor', e.n_fornecedor_fornecedor)
    img_status.setAttribute('class', 'icone_op')
    img_status.addEventListener('click', (evt) => {
        const idfornecedor = evt.target.dataset.idfornecedor
        if(evt.target.getAttribute('src') == '../../shared/img/on.svg'){
            const endpoint_mudarStatus = `${sv}/mudarstatusfornecedor/${idfornecedor}/I`
            fetch(endpoint_mudarStatus)
            .then(res => {
                if(res.status == 200){
                    evt.target.setAttribute('src', '../../shared/img/off.svg')
                    evt.target.parentNode.parentNode.childNodes[2].innerHTML = 'I'
                }
            })
        }else{
            const endpoint_mudarStatus = `${sv}/mudarstatusfornecedor/${idfornecedor}/A`
            fetch(endpoint_mudarStatus)
            .then(res => {
                if(res.status == 200){
                    evt.target.setAttribute('src', '../../shared/img/on.svg')
                    evt.target.parentNode.parentNode.childNodes[2].innerHTML = 'A'
                }
            })
        }
    })
    divc4.appendChild(img_status)

    const img_editar = document.createElement('img')
    img_editar.setAttribute('src', '../../shared/img/editar.svg')
    img_editar.setAttribute('class', 'icone_op')
    img_editar.addEventListener('click', (evt) => {
        const id = evt.target.parentNode.parentNode.firstChild.innerHTML
        modojanela = 'e'
        document.getElementById('tituloPopup').innerHTML = 'Editar Fornecedor'
        const endpoint = `${sv}/dadosfornecedor/${id}`
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            btn_gravarPopup.setAttribute('data-idfornecedor', id)
            f_nome.value = res[0].s_desc_fornecedor
            f_status.value = res[0].c_status_fornecedor
            img_foto.src = res[0].s_logo_fornecedor
            novoFornecedor.classList.remove('ocultarPopup')
            if(res[0].s_logo_fornecedor == '' || res[0].s_logo_fornecedor == '#'){
                img_foto.classList.add('esconderElemento')
            }else{
                img_foto.classList.remove('esconderElemento')
            }
        })
    })
    divc4.appendChild(img_editar)

    dadosGrid.appendChild(divLinha)
}

/* Funções de contato de fornecedor */

const addContForn = (id, nome) => {
    const divLinha = document.createElement('div')
    divLinha.setAttribute('class', 'linhaGrid')
    
    const divc1 = document.createElement('div')
    divc1.setAttribute('class', 'colunaLinhaGrid c1_lcf')
    divc1.innerHTML = id
    divLinha.appendChild(divc1)

    const divc2 = document.createElement('div')
    divc2.setAttribute('class', 'colunaLinhaGrid c2_lcf')
    divc2.innerHTML = nome
    divLinha.appendChild(divc2)

    const divc3 = document.createElement('div')
    divc3.setAttribute('class', 'colunaLinhaGrid c3_lcf')
    divLinha.appendChild(divc3)
    
    const img_removerContForn = document.createElement('img')
    img_removerContForn.setAttribute('src', '../../shared/img/delete.svg')
    img_removerContForn.setAttribute('class', 'icone_op')
    img_removerContForn.addEventListener('click', (evt) => {
        evt.target.parentNode.parentNode.remove()
    })
    divc3.appendChild(img_removerContForn)

    dadosGrid_contatosFornecedoresAdd.appendChild(divLinha)
}

const addTelefoneContForn = (telefone) => {
    const divLinha = document.createElement('div')
    divLinha.setAttribute('class', 'linhaGrid')
    
    const divc1 = document.createElement('div')
    divc1.setAttribute('class', 'colunaLinhaGrid c2_lcf')
    divc1.innerHTML = telefone
    divLinha.appendChild(divc1)

    dadosGrid_telefonesContatosFornecedores.appendChild(divLinha)
}

const criarLinhaContForn = (e) => {
    const divLinha = document.createElement('div')
    divLinha.setAttribute('class', 'linhaGrid')
    
    const divc1 = document.createElement('div')
    divc1.setAttribute('class', 'colunaLinhaGrid c1_lcf')
    divc1.innerHTML = e.n_pessoa_pessoa
    divLinha.appendChild(divc1)

    const divc2 = document.createElement('div')
    divc2.setAttribute('class', 'colunaLinhaGrid c2_lcf')
    divc2.innerHTML = e.s_nome_pessoa
    divLinha.appendChild(divc2)

    const divc3 = document.createElement('div')
    divc3.setAttribute('class', 'colunaLinhaGrid c3_lcf')
    divLinha.appendChild(divc3)
    
    const img_addContForn = document.createElement('img')
    img_addContForn.setAttribute('src', '../../shared/img/addContForn.svg')
    img_addContForn.setAttribute('class', 'icone_op')
    img_addContForn.addEventListener('click', (evt) => {
        const linha = evt.target.parentNode.parentNode
        const id = linha.childNodes[0].innerHTML
        const nome = linha.childNodes[1].innerHTML
        addContForn(id, nome)
    })
    divc3.appendChild(img_addContForn)

    const img_verFoneContForn = document.createElement('img')
    img_verFoneContForn.setAttribute('src', '../../shared/img/verTelefone.svg')
    img_verFoneContForn.setAttribute('class', 'icone_op')
    img_verFoneContForn.addEventListener('click', (evt) => {
        const id = evt.target.parentNode.parentNode.firstChild.innerHTML
        const endpoint = `${sv}/retornatelefones/${id}`
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            dadosGrid_telefonesContatosFornecedores.innerHTML = ''
            const mzi = maiorZIndex() + 2
            telefonesContatosFornecedores.setAttribute('style', `z-index: ${mzi} !important;`)
            telefonesContatosFornecedores.classList.remove('ocultarPopup')
            res.forEach(e => {
                addTelefoneContForn(e.s_numero_telefone)
            })
        })
    })
    divc3.appendChild(img_verFoneContForn)

    dadosGrid_novosContatosFornecedores.appendChild(divLinha)
}

btn_fecharPopupTelefonesContatosFornecedores.addEventListener('click', (evt) => {
    telefonesContatosFornecedores.classList.add('ocultarPopup')
})

/* Eventos de botões internos e externos do pop-up principal e conexão de APIs */
btn_add.addEventListener('click', (evt) => {
    modojanela = 'n'
    document.getElementById('tituloPopup').innerHTML = 'Novo Fornecedor'
    novoFornecedor.classList.remove('ocultarPopup')
    img_foto.classList.add('esconderElemento')
    f_nome.value = ''
    f_status.value = ''
    f_foto.value = ''
    img_foto.setAttribute('src', '#')
})

btn_fecharPopup.addEventListener('click', (evt) => {
    novoFornecedor.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt) => {
    const dados = {
        s_desc_fornecedor: f_nome.value,
        s_logo_fornecedor: img_foto.getAttribute("src"),
        c_status_fornecedor: f_status.value,
    }

    const cabecalho = {
        method: modojanela == "n" ? "POST" : "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    }

    let endpoint = null
    if(modojanela == 'n'){
        endpoint = `${sv}/novofornecedor` 
    }else{
        endpoint = `${sv}/editarfornecedor/${evt.target.dataset.idfornecedor}`
    }
    fetch(endpoint, cabecalho)
    .then(res => {
        if(res.status == 200){
            if(modojanela == 'n'){
                const config = {
                    titulo: "OK",
                    texto: "Novo fornecedor gravado!",
                    cor: "#008",
                    tipo: "ok",
                    ok: () => {},
                    sim: () => {},
                    nao: () => {}
                }
                Cxmsg.mostrar(config) 
                f_nome.value = ''
                f_status.value = ''
                f_foto.value = ''
                img_foto.setAttribute('src', '#')
            }else{
                const config = {
                    titulo: "OK",
                    texto: "Alterações de fornecedor salvas!",
                    cor: "#008",
                    tipo: "ok",
                    ok: () => {},
                    sim: () => {},
                    nao: () => {}
                }
                Cxmsg.mostrar(config)
            }
        }else{
            const config = {
                titulo: "Erro",
                texto: "Erro ao gravar dados.",
                cor: "#f00",
                tipo: "ok",
                ok: () => {},
                sim: () => {},
                nao: () => {}
            }
            Cxmsg.mostrar(config)
        }
    }).finally(() => {
        img_foto.classList.add('esconderElemento')
        carregarTodosFornecedores()
    })
})

btn_cancelarPopup.addEventListener('click', (evt) => {
    novoFornecedor.classList.add('ocultarPopup')
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