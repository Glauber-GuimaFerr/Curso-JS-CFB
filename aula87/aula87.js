const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click', (evt) => {
    //window.location = 'https://www.google.com.br'
    //window.location.replace('https://www.google.com.br')
    //window.location.assign('https://www.google.com.br')
    //window.location.reload()
    //window.history.back()
    //window.history.forward()
    //window.history.go(1)
    //console.log(window.history.length)
    window.location = url.value
})

//A propriedade window.location redireciona a página para o arquivo endereçado
//location.replace retira a url anterior do histórico
//location.assign não remove o backward da url corrente
//location.reload recarrega a página
//A propriedade window.history acessa o histórico do navegador
//history.back() retorna para a página anterior no histórico
//history.forward() avança para a página seguinte que está no histórico
//history.length retorna a quantidade de páginas no histórico
//history.go() avança uma determinada quantidade de páginas 