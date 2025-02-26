const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".clickable").forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.classList.add("show");
    });
});

modal.addEventListener("click", () => {
    modal.classList.remove("show");
});
document.addEventListener("DOMContentLoaded", function() {
    Swal.fire({
        title: "Bienvenido",
        text: "Bienvenido a nuestras HABITACIONES",
        icon: "success",
        confirmButtonText: "Aceptar"
    });
});

