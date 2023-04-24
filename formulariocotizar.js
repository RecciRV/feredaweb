$(document).ready(function() {
    $('#cotizacion-form').submit(function(event) {
      // Evita que el formulario se envíe automáticamente
      event.preventDefault();
  
      // Obtiene los valores de los campos del formulario
      var nombre = $('#nombre').val();
      var correo = $('#correo').val();
      var telefono = $('#telefono').val();
      var presupuesto = $('#presupuesto').val();
      var mensaje = $('#mensaje').val();
  
      // Realiza la petición AJAX para enviar el formulario
      $.ajax({
        url: 'enviarcotizacion.php', // Cambiar por la dirección de la página que procesará el formulario
        method: 'POST',
        data: {
          nombre: nombre,
          correo: correo,
          telefono: telefono,
          presupuesto: presupuesto,
          mensaje: mensaje
        },
        success: function(response) {
          // Muestra una ventana modal para indicar que se ha enviado el formulario
          $('#enviar-btn').after('<div class="modal">Formulario enviado correctamente.</div>');
  
          // Reinicia los valores de los campos del formulario
          $('#nombre').val('');
          $('#correo').val('');
          $('#telefono').val('');
          $('#presupuesto').val('');
          $('#mensaje').val('');
  
          // Espera 3 segundos y luego cierra la ventana modal
          setTimeout(function() {
            $('.modal').fadeOut('slow', function() {
              $(this).remove();
            });
          }, 3000);
        },
        error: function() {
          // Muestra una ventana modal para indicar que ha habido un error al enviar el formulario
          $('#enviar-btn').after('<div class="modal">Ha habido un error al enviar el formulario. Inténtalo de nuevo más tarde.</div>');
  
          // Espera 3 segundos y luego cierra la ventana modal
          setTimeout(function() {
            $('.modal').fadeOut('slow', function() {
              $(this).remove();
            });
          }, 3000);
        }
      });
    });
  });
  