<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nome_user = $_POST ['nome'];
        $email_user = $_POST ['email'];
        $senha_user = $_POST ['senha'];
        $confirmarsenha_user = $_POST ['confirmar'];

        if ($senha_user !== $confirmarsenha_user) {
            echo "As senhas não coincidem. Por favor, tente novamente.";
            exit;
        }

        $strcon = mysqli_connect ("localhost","root","","projeto") or die ("Erro ao conectar com o banco");
        $sql = "INSERT INTO usuario VALUES ('".$nome_user."' , '".$email_user."', '".$senha_user."', '".$confirmarsenha_user."');"; 
        mysqli_query($strcon, $sql) or die ('Erro ao tentar cadastrar'); 
        echo "Usuário cadastrado com sucesso";
    ?>
</body>
</html>