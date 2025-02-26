document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".general__form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtener los valores de los campos
        const name = document.getElementById("name-register").value.trim();
        const lastname = document.getElementById("lastname-register").value.trim();
        const email = document.getElementById("email-register").value.trim();
        const cell = document.getElementById("cell-register").value.trim();
        const password = document.getElementById("password-register").value.trim();

        // Verificar si los campos están vacíos
        if (name === "" || lastname === "" || email === "" || cell === "" || password === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Tu información se ha guardado correctamente.");
            form.reset(); // Limpia el formulario después del envío
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    Swal.fire({
        title: "Bienvenido",
        text: "Bienvenido al REGISTRO",
        icon: "success",
        confirmButtonText: "Aceptar"
    });
});
