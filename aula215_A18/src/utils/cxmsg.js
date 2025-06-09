class Cxmsg{
    static config = null

    static mostrar = (config) => {
        this.config = config
        alert(config.texto)
    }
}

export {Cxmsg}

<div id="cxmsg_fundo" class="cxmsg_fundo ocultarPopup">
    <div id="cxmsg" class="cxmsg">
        <div id="titulo_cxmsg" class="titulo_cxmsg">
            <p>Título</p>
            <div>
                <img id="btn_fechar" class="btn_fechar_cxmsg" src="../shared/img/fechar.svg">
            </div>
        </div>
        <div id="corpo_cxmsg" class="corpo_cxmsg">
            <p>Mensagem</p>
        </div>
        <div id="rodape_cxmsg" class="rodape_cxmsg">
            <button id="btn_ok_cxmsg" class="btn_cxmsg">ok</button>
            <button id="btn_sim_cxmsg" class="btn_cxmsg">sim</button>
            <button id="btn_nao_cxmsg" class="btn_cxmsg">não</button>
        </div>
    </div>
</div>

<style>
        .cxmsg_fundo{
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.75);
        }

        .cxmsg{
            width: 400px;
        }

        .titulo_cxmsg{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #00f;
            color: #fff;
            border-radius: 10px 10px 0px 0px;
            padding: 5px;
        }

        .corpo_cxmsg{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background-color: #aaa;
            color: #000;
            padding: 5px;

        }

        .rodape_cxmsg{
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 5px;
            background-color: #008;
            border-radius: 0px 0px 10px 10px;
        }

        .btn_fechar_cxmsg{
            background-color: #f00;
            width: 20px;
            cursor: pointer;
            border-radius: 5px;
        }

        .btn_cxmsg{
            background-color: #aaa;
            width: 100px;
            cursor: pointer;
            border-radius: 5px;
            padding: 5px;
            text-transform: uppercase;
            border: none;
        }
    </style>