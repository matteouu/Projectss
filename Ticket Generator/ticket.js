document.getElementById("ResgistroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("Nombre").value;
    const correo = document.getElementById("Correo").value;
    const github = document.getElementById("GitHub").value;
    const imagenInput = document.getElementById("image");
    const ticketDiv = document.getElementById("ticket");

    // Mostrar los datos
    document.getElementById("ticket-nombre").textContent = nombre;
    document.getElementById("ticket-correo").textContent = correo;
    document.getElementById("ticket-github").textContent = github;

    // Leer y mostrar la imagen
    const file = imagenInput.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        document.getElementById("ticket-imagen").src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file); // Convierte la imagen a base64 para mostrarla
    }

    // Mostrar el ticket
    ticketDiv.style.display = "block";

    // Opcional: mensaje de éxito
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Entrada generada con éxito!";
    mensaje.style.display = "block";
});
