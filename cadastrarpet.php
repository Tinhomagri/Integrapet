<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nome_pet = $_POST ['nomepet'];
        $especie_pet = $_POST ['especiepet'];
        $idade_pet = $_POST ['idadepet'];
        $sexo_pet = $_POST ['sexopet'];
        $cor_pet = $_POST ['corpet'];
        $porte_pet = $_POST ['portepet'];
        $descricao_pet = $_POST ['descricaopet'];

        $strcon = mysqli_connect ("localhost","root","","projeto") or die ("Erro ao conectar com o banco");
        $sql = "INSERT INTO pet VALUES ('".$nome_pet."' , '".$especie_pet."', '".$idade_pet."', '".$sexo_pet."', '".$cor_pet."', '".$porte_pet."', '".$descricao_pet."');"; 
        mysqli_query($strcon, $sql) or die ('Erro ao tentar cadastrar'); 
        echo "Pet cadastrado com sucesso";
    ?>
</body>
</html>