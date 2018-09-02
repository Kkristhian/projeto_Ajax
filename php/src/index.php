<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/estilo.css">
    <title>Exemplo jQuery</title>
</head>
<body>
    <input type="button" value="Buscar" id="buscarNome">
    <div id="resultado"></div>

    <label for="nome">Name:</label>
    <input type="text" id="nome">
    <input type="button" value="GRAVA" id="gravarNome">
    <br>
    <label for="para-deletar">Delete: </label>
    <input type="text" id="para-deletar">
    <input type="button" value="DELETE" id="deletarNome">
    <br>
    <label for="para-alterar">Update Name: </label>
    <input type="text" id="para-alterar" >
    <input type="button" value="UPDATE" id="alterarNome">
</body>
</html>