<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Bienvenida</title>
</head>
<body>

  <button>Obtener descuento</button>

  <script>
    window.onload = function() {
      var reply = prompt("Bienvenid@ ¿cuál es tu nombre?", "");
      alert(`¡Es un gusto tenerte aquí, ${reply}!`);
    }

    let miBoton = document.querySelector('button');
    miBoton.onclick = function() {
      alert('Con el código: JT05 obtendrás un 5% en tu próxima compra');
    }
  </script>

</body>
</html>
