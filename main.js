// Elements selection
const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle-js');
const primaryNav = document.querySelector('.primary-navigation ul');

let carouselContainer = document.querySelector('.carousel__testimonials');
let paginationItems = Array.from(document.querySelectorAll('.pagination__item'));

const copyrightDate = document.querySelector('.date');

// functions
function handlenavToggle() {
    navToggle.classList.toggle('close-btn');
    if (!primaryNav.classList.contains('show')) {
        primaryNav.classList.add('show');
        navToggle.setAttribute('aria-expanded', true)
        primaryHeader.toggleAttribute('data-overlay')
    } else {
        primaryNav.classList.remove('show');
        navToggle.setAttribute('aria-expanded', false);
        primaryHeader.toggleAttribute('data-overlay')
    }
}

function carousel() {
    [...carouselContainer.children].map((item, index) => {
        item.style.left = `${index * 100}%`;
        paginationItems[index].setAttribute('data-index', index);
    })
}
function handlePagination() {
    paginationItems.forEach((item) => {
        item.classList.remove('active');
    })
    this.classList.add('active');
    [...carouselContainer.children].map((item) => {
        item.style.transform = `translateX(-${Number(this.dataset.index) * 100}%)`;
    })
}

copyrightDate.textContent = " "+new Date().getFullYear();

// Adding event listeners
navToggle.addEventListener('click', handlenavToggle);
window.addEventListener('DOMContentLoaded', carousel);
paginationItems.forEach((item) => {
    item.addEventListener('click', handlePagination);
})

