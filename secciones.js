const botonCambiar = document.getElementById('cambiar-contenido');
const seccion1 = document.getElementById('seccion-1');
const seccion2 = document.getElementById('seccion-2');

botonCambiar.addEventListener('click', function() {
  if (seccion1.style.display !== 'none') {
    seccion1.style.display = 'none';
    seccion2.style.display = 'block';
  } else {
    seccion1.style.display = 'block';
    seccion2.style.display = 'none';
  }
});
