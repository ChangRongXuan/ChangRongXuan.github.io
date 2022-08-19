
var lightbox = document.querySelector('.lightbox');

const navkey = document.querySelector('.nav_list');


const openMenu = () =>{
    lightbox.style.display ="block";
    }

const closeMenu = () =>{
    lightbox.style.display ="none";
    }

let menuOpened = false;

const toggleMenu = () => {
    menuOpened = !menuOpened;
    if (menuOpened) {
        openMenu();
    } else {
        closeMenu();
    }
};

navkey.addEventListener("click",toggleMenu);




