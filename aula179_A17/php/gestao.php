<?php
    $servidor = "127.0.0.1";
    $user = "root";
    $senha = "";
    $db = "agenda1_js";
    $port = 3306;
    $con = new mysqli($servidor, $user, $senha, $db, $port);

    $dados[] = array(
        "id" => "1",
        "nome" => "Bruno"
    );

    echo json_encode($dados)
?>