const insta = document.getElementById('instaId');
const linkedin = document.getElementById('linkedinId');
const github = document.getElementById('githubId');
const whatsapp = document.getElementById('whatsappId');

insta.addEventListener('click', function () {
    window.open('https://www.instagram.com/marconobree?igsh=MTJ4dXRweTVqMHVx', '_blank');
});

linkedin.addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/marco-nobre-730a02194', '_blank');
});

github.addEventListener('click', function () {
    window.open('https://github.com/MarcoAntonioNobre', '_blank');
});

whatsapp.addEventListener('click', function () {
    const numero = '5533988661359';
    const mensagem = encodeURIComponent('Olá, estou entrando em contato com você pelo link do seu portfólio!');
    const whatsappUrl = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(whatsappUrl, '_blank');
});

const copy = document.getElementById('copy');
const ano = new Date().getFullYear();
copy.innerHTML = '&copy Marco Nobre, '+ ano +'. Todos os direitos reservados.'