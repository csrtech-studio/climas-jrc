if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}



document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recoge los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Define el objeto de parámetros para EmailJS
    var templateParams = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Envía el correo usando EmailJS
    emailjs.send('Tservice_12g7xgl', 'template_133diss', templateParams)
        .then(function(response) {
            console.log('Correo enviado con éxito', response.status, response.text);
            alert('Mensaje enviado con éxito. No pondremos en contacto con usted a la Brevedad');
        }, function(error) {
            console.error('Error al enviar el correo', error);
            alert('Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.');
        });
});


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);
});

