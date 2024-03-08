// Función para el botón Agregar al carrito
function agregarAlCarrito(nombreJuego, precioJuego) {
  alert(`¡${nombreJuego} agregado al carrito por ${precioJuego}€!`);
}
// Función para validar el formulario de suscripción
function validarFormulario() {
  var nombre = document.getElementById('nombre').value.trim();
  var apellidos = document.getElementById('apellidos').value.trim();
  var email = document.getElementById('email').value.trim();
  var telefono = document.getElementById('telefono').value.trim();

  // Validar nombre y apellidos (no deben estar vacíos)
  if (nombre === '' || apellidos === '') {
    alert('Por favor, completa los campos de nombre y apellidos.');
    return false;
  }


  // Validar número de teléfono (debe contener solo dígitos)
  var telefonoValidado = /^\d+$/;
  if (!telefono.match(telefonoValidado)) {
    alert('Por favor, introduce un número de teléfono válido.');
    return false;
  }

  // Validar dirección de correo electrónico
  var emailValidado = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailValidado)) {
    alert('Por favor, introduce una dirección de correo electrónico válida.');
    return false;
  }
  alert('¡Gracias por suscribirte! Recibirás novedades y ofertas muy pronto.');
  return true;
}

  // Cambiar Fondo
  function cambiarFondo() {
    document.body.classList.toggle("consolas")
    document.body.classList.toggle("index")
  }
//Para ver contenido adicional 
function toggleContenido(juegoId) {
  var contenido = document.getElementById('contenidoAdicional_' + juegoId);
  if (contenido.style.display === 'none') {
    contenido.style.display = 'block';
  } else {
    contenido.style.display = 'none';
  }
}

function mostrarValoracion(juegoId) {
  var valoracion = document.getElementById('valoracion_' + juegoId).value;
  alert('Has valorado ' + juegoId + ' con ' + valoracion + ' estrellas.');
}

// Función para cambiar las imágenes del carrusel
function cambiarImagen(direccion) {
  var juegos = document.getElementsByClassName('game');
  
  // Itera sobre cada sección de juego
  for (var i = 0; i < juegos.length; i++) {
    var imagenes = juegos[i].getElementsByTagName('img');
    var indiceActual = 0;

    // Encuentra la imagen actual
    for (var j = 0; j < imagenes.length; j++) {
      if (imagenes[j].classList.contains('visible')) {
        indiceActual = j;
        imagenes[j].classList.remove('visible');
      }
    }

    // Calcula el nuevo índice
    if (direccion === 'anterior') {
      indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    } else {
      indiceActual = (indiceActual + 1) % imagenes.length;
    }

    // Muestra la nueva imagen
    imagenes[indiceActual].classList.add('visible');
  }
}

// Mostrar la primera imagen al cargar la página
window.onload = function () {
  var juegos = document.getElementsByClassName('game');

  // Itera sobre cada sección de juego
  for (var i = 0; i < juegos.length; i++) {
    var imagenes = juegos[i].getElementsByTagName('img');
    if (imagenes.length > 0) {
      imagenes[0].classList.add('visible');
    }
  }
};