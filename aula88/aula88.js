const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click', (evt) => {
    alert('Olá, como você está?')
})

btn_confirm.addEventListener('click', (evt) => {
    if(confirm('Você está aprendendo muito?')){
        console.log('Botão OK pressionado')
    }else{
        console.log('Botão CANCELAR pressionado')
    }
})

btn_prompt.addEventListener('click', (evt) => {
    const nome = prompt('Digite seu nome:', 'Seu nome')
    if(nome == null){
        console.log('Botão CANCELAR pressionado')
    }else{
        console.log(`Nome digitado: ${nome}`)
    }
})


//Caixas de diálogo fazem parte de window
//Mudam de estilo para cada navegador
//alert() apresenta uma caixa de diálogo simples
//confirm() apresenta uma caixa de diálogo solicitando uma escolha
//prompt() apresenta uma caixa de diálogo solicitando uma entrada de dados e permite placeholder