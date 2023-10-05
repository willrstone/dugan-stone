// Header Hamburger
const hamburger = document.querySelector('.hamburger')
const navlist = document.querySelector('.nav-list ul')
const mobile = document.querySelector('.mobile-menu')
const navbar = document.querySelector('.navbar')
const showcase = document.querySelector('.showcase')

const show = () => {
   hamburger.classList.toggle('active')
   mobile.classList.toggle('active')
   navbar.classList.toggle('active')
};

hamburger.addEventListener('click', e => {
    show()
});




// Slideshow
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'))
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'))
}

// Button events
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});