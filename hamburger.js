const hamburgerBtn = document.getElementById('hamburger-icon'),
    menuBlock = document.getElementById('hamburger'),
    header = document.querySelector('header');

hamburgerBtn.addEventListener('click', function() {
    menuBlock.classList.toggle('show');
    header.classList.toggle('fixed');
})