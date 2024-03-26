document.getElementById('verMensajeBtn').addEventListener('click', function() {
    var mensajeEspecial = document.getElementById('mensajeEspecial');
    mensajeEspecial.classList.remove('hidden');
    this.style.display = 'none'; // Ocultar el botón después de mostrar el mensaje
  });
  