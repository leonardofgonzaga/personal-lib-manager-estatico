// Inicio script navbar 


// Ativar botão menu
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

// Mostrar e ocultar submenus
$('.minha-biblioteca').click(function () {
    $('.itens-minha-biblioteca').toggleClass('mostra')
})

$('.leituras').click(function () {
    $('.itens-leituras').toggleClass('mostra')
})

// Girar seta do menu
$('.minha-biblioteca').click(function () {
    $('.menu li a .seta-minha-biblioteca').toggleClass('girar')
})

$('.leituras').click(function () {
    $('.menu li a .seta-leituras').toggleClass('girar')
})


// Mostrar barra de pesquisa
$('.lupa').click(function () {
    $('.barra-pesquisa').toggleClass('mostra')
})