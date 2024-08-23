<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $server = "localhost";
        $usuario = "root";
        $senha = "";
        $banco = "projeto";
        $conexao = mysqli_connect($server, $usuario, $senha);
        $db = mysqli_select_db($conexao, $banco);
            if ($conexao && $db)
            {
                echo "Conexão OK";
            }
            else
            {
                echo "Conexão errada";
            }
    ?>
</body>
</html>