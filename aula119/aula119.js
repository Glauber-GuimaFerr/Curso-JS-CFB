const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click', (evt) => {
    let msg = null
    
    if(!f_nota.checkValidity()){
        msg = f_nota.validationMessage
    }

    f_msg.innerHTML = msg
    evt.preventDefault()
})

//As validações do DOM funcionam como um check-up de captação de dados feitos de forma nativa 
//preventDefault() garante que o submit do formulário não seja executado
//checkValidity() é um método de validação do DOM que verifica se as regras do formulário estão de acordo
//A propriedade de validação do DOM 'validationMessage' retorna a mensagem de alerta do formulário