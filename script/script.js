const btnMenu = document.getElementById('btn-menu');
function toggleMenu(event) {
    if(event.type=== 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu );
btnMenu.addEventListener('touchstart', toggleMenu );

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY>0)
})

const btnDisplay = document.getElementById('btn-display');

function displayNone(event) {
    if(event.type==='click') event.preventDefault();
    const timeTabela = document.getElementsByClassName('time-tabela')[0];
    timeTabela.classList.toggle('ativo');
}

btnDisplay.addEventListener('click', displayNone);