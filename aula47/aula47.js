const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = ['html', 'css', 'javascript']

p_array.innerHTML = '[' + elementos_array + ']'

btnPesquisar.addEventListener('click', (evt) => {
    resultado.innerHTML = 'Valor não encontrado'
    const ret = elementos_array.find((e, i) => {
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = 'Valor ' + e + ' encontrado na posição ' + i
            return e
        }
    })
})

//Find é um método que busca um valor de determinado Array e retorna seu primeiro elemento se for verdadeiro
//toUpperCase é um método que converte uma string para maiúscula