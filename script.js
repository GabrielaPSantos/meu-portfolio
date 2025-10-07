// Efeito Typed.js
const typed = new Typed("#typed", {
  strings: ["Desenvolvedora Web,", "Front-end"],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 1500,
  loop: true
});


//Envio do formulario
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const comentario = document.getElementById('comentario').value

    const destinatario = "gabrielaperessantos1@gmail.com"
    const assunto = 'Sobre seu Potfólio'
    const corpo = `Olá me chamo ${nome}, ${comentario}`

     const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

     window.open(gmailLink, '_blank');

})
