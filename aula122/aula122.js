const endpoint = 'http://localhost:8080'
fetch(endpoint)
.then(res => res.json())
.then(dados => {
    console.log(dados)
})

//A leitura, consumo e envio de dados de APIs são feitas pela função Fetch, realizando requisições assíncronas
//Um endpoint é o ponto de contato entre a API e servidor
//fetch() recebe parâmetros de endpoint ou promise
//then() realiza os procedimentos seguintes do Fetch
//Para rodar o servidor Node, abra o diretório no terminal e execute 'node index.js' 