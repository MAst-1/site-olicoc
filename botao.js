const btnMenu = document.getElementById('btn-menu');
const btnVoltar = document.getElementsByClassName('container-s');

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