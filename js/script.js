(function(){
    emailjs.init("GIigsFAhMFrRS_anK"); // Reemplaza "GIigsFAhMFrRS_anK" con tu clave pública de EmailJS
})();

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Recoge los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;

    // Envía el formulario a través de EmailJS
    emailjs.send("service_12g7xgl", "template_133diss", {
        nombre: nombre,
        telefono: telefono,
        servicio: servicio,
        mensaje: mensaje
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Gracias por enviar sus datos! en un momento mas nos pondremos en contacto!');
        document.getElementById('infoForm').reset(); // Resetea el formulario
    }, function(error) {
        console.error('FAILED...', error);
        alert('Error al enviar el formulario. Por favor, inténtelo de nuevo.');
    });
});
