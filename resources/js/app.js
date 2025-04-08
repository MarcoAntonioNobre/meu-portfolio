import './bootstrap';

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("mobile-menu");
    const menuIconOpen = document.getElementById("menu-icon-open");
    const menuIconClose = document.getElementById("menu-icon-close");
    const navLgSobreMim = document.getElementById("nav-lg-sobre-mim");
    const navLgMeusProjetos = document.getElementById("nav-lg-meus-projetos");
    const navLgTecnologias = document.getElementById("nav-lg-tecnologias");
    const navLgContato = document.getElementById("nav-lg-contato");

    if (!menuButton || !menu || !menuIconOpen || !menuIconClose) return;

    menuButton.addEventListener("click", function (event) {
        const isOpen = !menu.classList.contains("hidden");

        menu.classList.toggle("hidden");
        menuIconOpen.classList.toggle("hidden", !isOpen);
        menuIconClose.classList.toggle("hidden", isOpen);

        event.stopPropagation();
    });

    navLgSobreMim.addEventListener("click", function (event) {
        menu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
    })
    navLgTecnologias.addEventListener("click", function (event) {
        menu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden")
    })
    navLgMeusProjetos.addEventListener("click", function (event) {
        menu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden")
    })
    navLgContato.addEventListener("click", function (event) {
        menu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden")
    })

    // Fechar menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (!menu.classList.contains("hidden") && !menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.add("hidden");
            menuIconOpen.classList.remove("hidden");
            menuIconClose.classList.add("hidden");
        }
    });
});


const toggleBtn = document.getElementById('toggle-theme');
const toggleBtnSmMenu = document.getElementById('toggle-theme-sm-menu');
const svgClaro = document.getElementById('svgClaro');
const svgEscuro = document.getElementById('svgEscuro');
const svgClaroSmMenu = document.getElementById('svgClaroSmMenu');
const svgEscuroSmMenu = document.getElementById('svgEscuroSmMenu');


function atualizarIconeTema() {
    const isDark = document.body.classList.contains('dark');

    if (!isDark) {
        svgClaro.classList.remove('hidden');
        svgClaroSmMenu.classList.remove('hidden');
        svgEscuro.classList.add('hidden');
        svgEscuroSmMenu.classList.add('hidden');
    } else {
        svgClaro.classList.add('hidden');
        svgClaroSmMenu.classList.add('hidden');
        svgEscuro.classList.remove('hidden');
        svgEscuroSmMenu.classList.remove('hidden');
    }
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

atualizarIconeTema();

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    atualizarIconeTema();
});


toggleBtnSmMenu.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    atualizarIconeTema();
});
