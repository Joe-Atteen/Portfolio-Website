const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
        nav.classList.add('black');
    }
    else {
        nav.classList.remove('black');
    }
})