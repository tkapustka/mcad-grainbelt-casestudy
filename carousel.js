document.addEventListener('DOMContentLoaded', () => {
    const buttonRight = document.getElementById('slide_right');
    const buttonLeft = document.getElementById('slide_left');
    const container = document.querySelector('.beer_all');

    buttonRight.onclick = function () {
        container.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }

    buttonLeft.onclick = function () {
        container.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    }


});