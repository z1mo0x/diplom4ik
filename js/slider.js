var slideIndex = 1;
var timer = null;
var animation = null;
var delay = 10000;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
showSlides(slideIndex);
afterTime(delay);


prev.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
});
next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
});

function showSlides(n) {
    clearInterval(animation);

    var slide = document.querySelectorAll('.example__slide');
    if (n && n > slide.length) {
        slideIndex = 1;
    }

    if (n && n < 1) {
        slideIndex = slide.length;
    }

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slide.length;
    }

    slide.forEach((e) => {
        e.style.display = 'none';
        e.classList.remove('slide');
    });
    slide[slideIndex - 1].style.display = 'block';
    slide[slideIndex - 1].classList.add('slide');

    afterTime(delay);
}

function afterTime(delay) {
    clearInterval(timer);
    timer = setInterval(() => {
        slideIndex++;
        showSlides();
    }, delay);
}
