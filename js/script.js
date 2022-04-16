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



//on site load, logo shouldn't be seen
function myFunction() {
    document.getElementById("sig-log").style.opacity = 0;
}

//logo should appear on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= 306) {
        document.getElementById("sig-log").style.opacity = 1;
        document.getElementById("sig-log").style.transition = "all .5s ease-in-out";
    }
    else {
        document.getElementById("sig-log").style.opacity = 0;
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
        if (pageYOffset >= (sectionTop - sectionHeight / 3)){
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




//top page button
mybutton = document.getElementById("my-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }