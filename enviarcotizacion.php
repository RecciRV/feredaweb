<?php
// Configura los detalles del correo electrónico
$to = 'renejuarezh@hotmail.com';
$subject = 'Solicitud de cotización';
$headers = 'From: correo.origen@ejemplo.com' . "\r\n" .
    'Reply-To: correo.origen@ejemplo.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Obtiene los valores enviados por el formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$presupuesto = $_POST['presupuesto'];
$mensaje = $_POST['mensaje'];

// Crea el mensaje del correo electrónico
$message = "Se ha recibido una solicitud de cotización con los siguientes detalles:\n\n";
$message .= "Nombre: " . $nombre . "\n";
$message .= "Correo: " . $correo . "\n";
$message .= "Teléfono: " . $telefono . "\n";
$message .= "Presupuesto: " . $presupuesto . "\n";
$message .= "Mensaje: " . $mensaje . "\n";

// Envía el correo electrónico
mail($to, $subject, $message, $headers);
?>
