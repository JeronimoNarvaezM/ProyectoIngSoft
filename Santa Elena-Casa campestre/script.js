
window.addEventListener("scroll", function () {
    let header = document.querySelector(".header");
    let logo = document.querySelector(".logo");
    let links = document.querySelectorAll("nav ul li a");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});

