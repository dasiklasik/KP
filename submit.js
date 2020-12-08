const submitBtn = document.getElementById('submit'),
    footer = document.querySelector('footer');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault;
    displayThanks();

});

function displayThanks(argument) {
    document.getElementById('afterSubmit').style.display = 'block';
    document.querySelector('form').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.width = '100%';


}