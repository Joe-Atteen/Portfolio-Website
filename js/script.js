var nav = document.getElementById('nav');
 window.onscroll = function() {
    if (window.pageYOffset > 100) {
        nav.style.background = "#000";
    }
    else{
        nav.style.background = "transparent";
    }
}