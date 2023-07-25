const btn = document.querySelector('#btn-Display');

function btnLigado(event) {
    if (event.type === 'click') event.preventDefault();
    const body = document.querySelector('body');
    body.classList.toggle('active');
}


btn.addEventListener('click', btnLigado);