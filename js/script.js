//background color on navbar on scroll
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

//nav link highlight on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .links li');
const lg = document.querySelector('logo');
window.addEventListener('scroll', () =>{
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 2)){
            current = section.getAttribute('id');
        }
    })
    
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)){
            li.classList.add('active')
        }
    })

})