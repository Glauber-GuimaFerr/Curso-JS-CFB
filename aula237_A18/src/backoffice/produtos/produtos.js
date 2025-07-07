import {Cxmsg} from '../../utils/cxmsg.js'

/* IDs */
const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoProduto = document.querySelector('#novoProduto')

const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_fecharPopupPesq = document.querySelector('#btn_fecharPopupPesq')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const f_codprod = document.querySelector('#f_codprod')
const f_descprod = document.querySelector('#f_descprod')
const f_qtdeprod = document.querySelector('#f_qtdeprod')
const f_tipoprod = document.querySelector('#f_tipoprod')
const f_fornprod = document.querySelector('#f_fornprod')
const f_statusprod = document.querySelector('#f_statusprod')
const f_filtragem = document.querySelector('#f_filtragem')
const pesquisa = document.querySelector('#pesquisa')
const btn_pesq = document.querySelector('#btn_pesq')
const f_pesqId = document.querySelector('#f_pesqId')
const f_pesqNome = document.querySelector('#f_pesqNome')
const f_pesq = document.querySelector('#f_pesq')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const btn_listarTudo = document.querySelector('#btn_listarTudo')

/* Variáveis importantes */
let modojanela = 'n' //n = Novo produto | e = Editar novo produto
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
            document.getElementById('tituloPopupPesquisar').innerHTML = 'Pesquisar Produto'
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
        const endpointpesq = `${sv}/pesquisapessoa/${tipo}/${f_pesq.value}`
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
            texto: "Preencha o campo de pesquisa! Digite o nome ou ID do produto.",
            cor: "#008",
            tipo: "ok",
            ok: () => {},
            sim: () => {},
            nao: () => {}
        }
        Cxmsg.mostrar(config)
    }
})

btn_listarTudo.addEventListener('click', (evt) => {
    carregarTodosProdutos()
})

/* Funções para carregar a tabela */
const carregarTodosProdutos = () => {
    const endpoint_todosprodutos = `${sv}/todosprodutos`
    fetch(endpoint_todosprodutos)
    .then(res => res.json())
    .then(res => {
        dadosGrid.innerHTML = ''
        res.forEach(e => {
            criarLinha(e)
        })
    })
}
carregarTodosProdutos()

const criarLinha = (e) => {
    const divLinha = document.createElement('div')
    divLinha.setAttribute('class', 'linhaGrid')
    
    const divc1 = document.createElement('div')
    divc1.setAttribute('class', 'colunaLinhaGrid c1')
    divc1.innerHTML = e.n_cod_produto
    divLinha.appendChild(divc1)

    const divc2 = document.createElement('div')
    divc2.setAttribute('class', 'colunaLinhaGrid c2')
    divc2.innerHTML = e.s_desc_produto
    divLinha.appendChild(divc2)

    const divc3 = document.createElement('div')
    divc3.setAttribute('class', 'colunaLinhaGrid c3')
    divc3.innerHTML = e.n_qtde_produto
    divLinha.appendChild(divc3)

    const divc4 = document.createElement('div')
    divc4.setAttribute('class', 'colunaLinhaGrid c4')
    divc4.innerHTML = e.c_status_produto
    divLinha.appendChild(divc4)

    const divc5 = document.createElement('div')
    divc5.setAttribute('class', 'colunaLinhaGrid c5')
    divLinha.appendChild(divc5)
    
    const img_status = document.createElement('img')
    if(e.c_status_pessoa == 'A'){
        img_status.setAttribute('src', '../../shared/img/on.svg')
    }else{
        img_status.setAttribute('src', '../../shared/img/off.svg')
    }
    img_status.setAttribute('data-idpessoa', e.n_pessoa_pessoa)
    img_status.setAttribute('class', 'icone_op')
    img_status.addEventListener('click', (evt) => {
        const idpessoa = evt.target.dataset.idpessoa
        if(evt.target.getAttribute('src') == '../../shared/img/on.svg'){
            const endpoint_mudarStatus = `${sv}/mudarstatuspessoa/${idpessoa}/I`
            fetch(endpoint_mudarStatus)
            .then(res => {
                if(res.status == 200){
                    evt.target.setAttribute('src', '../../shared/img/off.svg')
                    evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'I'
                }
            })
        }else{
            const endpoint_mudarStatus = `${sv}/mudarstatuspessoa/${idpessoa}/A`
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
        document.getElementById('tituloPopup').innerHTML = 'Editar Pessoa'
        const endpoint1 = `${sv}/dadospessoa/${id}`
        fetch(endpoint1)
        .then(res => res.json())
        .then(res => {
            btn_gravarPopup.setAttribute('data-idpessoa', id)
            f_nome.value = res[0].s_nome_pessoa
            f_tipoPessoa.value = res[0].n_tipopessoa_pessoa
            f_status.value = res[0].c_status_pessoa
            novaPessoa.classList.remove('ocultarPopup')
        })
    })
    divc5.appendChild(img_editar)

    dadosGrid.appendChild(divLinha)
}

/* Eventos de botões internos e externos do pop-up principal e conexão de APIs */
const endpoint_tiposPessoa = `${sv}/tipospessoa`
fetch(endpoint_tiposPessoa)
.then(res => res.json())
.then(res => {
    f_tipoPessoa.innerHTML = ''
    res.forEach(e => {
        const opt = document.createElement('option')
        opt.setAttribute('value', e.n_tipopessoa_tipopessoa)
        opt.innerHTML = e.s_desc_tipopessoa
        f_tipoPessoa.appendChild(opt)
    })
})

const listarTiposProd = () => {
    const endpoint_tiposProduto = `${sv}/tiposproduto`
    fetch(endpoint_tiposProduto)
    .then(res => res.json())
    .then(res => {
        f_tipoprod.innerHTML = ''
        res.forEach(e => {
            const opt = document.createElement('option')
            opt.setAttribute('value', e.n_tipoproduto_tipoproduto)
            opt.innerHTML = e.s_desc_tipoproduto
            f_tipoprod.appendChild(opt)
        })
    })
}

const listarFornProd = () => {
    const endpoint_fornecedoresProduto = `${sv}/fornecedoresproduto`
    fetch(endpoint_fornecedoresProduto)
    .then(res => res.json())
    .then(res => {
        f_fornprod.innerHTML = ''
        res.forEach(e => {
            const opt = document.createElement('option')
            opt.setAttribute('value', e.n_fornecedor_fornecedor)
            opt.innerHTML = e.s_desc_fornecedor
            f_fornprod.appendChild(opt)
        })
    })
}

btn_add.addEventListener('click', (evt) => {
    modojanela = 'n'
    document.getElementById('tituloPopup').innerHTML = 'Novo Produto'
    novoProduto.classList.remove('ocultarPopup')
    f_codprod.value = ''
    f_descprod.value = ''
    f_qtdeprod.value = 0
    listarTiposProd()
    listarFornProd()
    f_statusprod.value = 'A'
})

btn_fecharPopup.addEventListener('click', (evt) => {
    novoProduto.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt) => {
    const dados = {
        n_cod_produto: f_codprod.value,
        n_tipoproduto_produto: f_tipoprod.value,
        s_desc_produto: f_descprod.value,
        n_fornecedor_produto: f_fornprod.value,
        n_qtde_produto: f_qtdeprod.value,
        c_status_produto: f_statusprod.value
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
        endpoint = `${sv}/novoproduto` 
    }else{
        endpoint = `${sv}/editarproduto/${evt.target.dataset.idpessoa}`
    }
    fetch(endpoint, cabecalho)
    .then(res => {
        if(res.status == 200){
            if(modojanela == 'n'){
                const config = {
                    titulo: "OK",
                    texto: "Novo produto registrado com sucesso!",
                    cor: "#008",
                    tipo: "ok",
                    ok: () => {},
                    sim: () => {},
                    nao: () => {}
                }
                Cxmsg.mostrar(config) 
                f_codprod.value = ''
                f_descprod.value = ''
                f_qtdeprod.value = 0
                f_tipoprod.innerHTML = ''
                f_fornprod.innerHTML = ''
                f_statusprod.value = 'A'
            }else{
                const config = {
                    titulo: "OK",
                    texto: "Alterações de produto salvas!",
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
        carregarTodosProdutos()
    })
})

btn_cancelarPopup.addEventListener('click', (evt) => {
    novoProduto.classList.add('ocultarPopup')
})