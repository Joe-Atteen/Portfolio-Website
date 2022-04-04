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

// $(document).ready(function() {
//     $('nav .links li a').click(function(event) {
//         $('nav .links li a').removeClass('active');
//         $(this).addClass('active');
//         thisAttrHref = $(this).attr('href');
//         thisAttrHrefOffset = $(thisAttrHref).offset().top + 50;
//         $('html,body').animate({scrollTop:thisAttrHrefOffset});
//         event.preventDefault();
//     });
// });

// $window.scroll(function() {
//     $('.container').each(function() {
//         containerTop = $(this).offset().top;
//         if($(document).scrollTop() > containerTop){
//             thisOfs = $(this).attr('id');
//             $('.container').removeClass('active');
//             ActiveID =  $(this).addClass('active').attr('id');
//         }
//     });
//     $('nav .links li').each(function(index, el) {
//         thisChildren = $(this).children('a');
//         thisChildrenHref = $(this).children('active').attr('href');
//         if( thisChildrenHref === '#'+ActiveID){
//             $('nav .links li a').removeClass('active');
//             $(thisChildren).addClass('a');
//         }
//     });
// });

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