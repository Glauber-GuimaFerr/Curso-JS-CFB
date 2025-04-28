import { Cxmsg } from './js/cxmsg.js'

const callback_ok = () => {}

const callback_naook = () => {
    const config = {
        cor: "#800",
        tipo: "ok",
        textos: null,
        comando_sn: () => {}
        }
        Cxmsg.mostrar(config, "Erro", "Login não efetuado! Usuário ou Senha incorretos.") 
}

const configlogin = {
    cor: "048",
    img: "./img/logo.png",
    endpoint: "http://localhost:8080"
}

Login.login(callback_ok, callback_naook, configlogin)