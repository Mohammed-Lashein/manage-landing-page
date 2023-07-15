// Elements selection
const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle-js');
const primaryNav = document.querySelector('.primary-navigation ul');



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

// Adding event listeners
navToggle.addEventListener('click', handlenavToggle);
