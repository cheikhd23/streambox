// StreamBox frontend scripts go here.
const hamburger = document.getElementById('hamburger');
const siteNav = document.getElementById('siteNav');

if (hamburger && siteNav) {
    hamburger.addEventListener('click', () => {
        siteNav.classList.toggle('open');
    });
}
