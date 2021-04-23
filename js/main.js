const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const burger = document.querySelector('.burger');
const menu = document.querySelectorAll('.menu a');

burger.addEventListener('click', event => {
    for (let i = 0; i < menu.length; i++) {
        event.preventDefault();
        menu[i].classList.toggle('valid');
    }
})


let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nexSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}
const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})
next.addEventListener('click', nexSlide);
prev.addEventListener('click', prevSlide);

setInterval(nexSlide, 5000);