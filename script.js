'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        if (navItem.classList.contains('active')) return;

        const currentActiveIndex = navItems.findIndex(item => item.classList.contains('active'));
        carouselItems[currentActiveIndex].classList.remove('active');
        navItems[currentActiveIndex].classList.remove('active');

        carouselItems[index].classList.add('active');
        navItem.classList.add('active');
    });
});

function swipe(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if (e.currentTarget.classList.contains('left')) {
        if (currentIndex === 0) {
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else {
            nextIndex = currentIndex - 1;
        }
    }
    else {
        if (currentIndex === CAROUSEL_SIZE - 1) {
            nextIndex = 0;
        }
        else {
            nextIndex = currentIndex + 1;
        }
    }

    carouselItems[nextIndex].classList.add('active');
    navItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    navItems[currentIndex].classList.remove('active');
}

function openModal(modalId) {
    var modal = document.getElementById("myModal" + modalId);
    modal.style.display = "block";

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function closeModal(modalId) {
    var modal = document.getElementById("myModal" + modalId);
    modal.style.display = "none";
}
