<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Bienvenida</title>
</head>
<body>

  <button id="descuentoBtn">Obtener descuento</button>

  <script>
    window.onload = function() {
      var reply = prompt("Bienvenid@ ¿cuál es tu nombre?", "");
      alert(`¡Es un gusto tenerte aquí, ${reply}!`);

      // Aseguramos que el botón esté disponible al momento de asignar el evento
      let miBoton = document.getElementById('descuentoBtn');
      miBoton.onclick = function() {
        alert('Con el código: JT05 obtendrás un 5% en tu próxima compra');
      }
    }
  </script>

</body>
</html>
