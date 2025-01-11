// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Rolagem suave para seções
    const menuLinks = document.querySelectorAll("header .menu li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth",
                });
            }
        });
    });

    // Animação ao rolar (fade-in)
    const fadeElements = document.querySelectorAll(".hidden");
    const fadeInOnScroll = () => {
        const scrollPosition = window.innerHeight + window.scrollY;
        fadeElements.forEach(el => {
            if (scrollPosition > el.offsetTop + 100) {
                el.classList.add("show");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Inicializa no carregamento da página

    // Validação do formulário
    const form = document.querySelector("form");
    form.addEventListener("submit", event => {
        const nameInput = document.getElementById("nome");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("mensagem");

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos.");
        } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            event.preventDefault();
            alert("Por favor, insira um endereço de email válido.");
        }
    });
});
