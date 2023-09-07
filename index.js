//MIXITUP
var mixer = mixitup(document.querySelector('.projects_container'), {
    animation: {
        enable: false,
    }
});
mixer.filter('*');

//NAVIGATION BAR TOGGLE
const navMenu = document.querySelector('.nav_menu')
const navOpen = document.querySelector('.nav_toggle-open')
const navClose = document.querySelector('.nav_toggle-close')

const openNavHandler = () => {
    navMenu.style.display = 'flex';
    navOpen.style.display = 'none';
    navClose.style.display = 'inline-block';
}

const closeNavHandler = () => {
    navMenu.style.display = 'none';
    navOpen.style.display = 'inline-block';
    navClose.style.display = 'none';
}

navOpen.addEventListener('click', openNavHandler)
navClose.addEventListener('click', closeNavHandler)

const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler)
    })
}

//THEME
const theme = document.querySelector('.nav_theme-btn');
theme.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
        bodyClass = 'dark';
        document.body.className = bodyClass;
        theme.innerHTML = "<i class='uil uil-sun'></i>"
        window.localStorage.setItem('theme', bodyClass);
    } else {
        bodyClass = '';
        document.body.className = bodyClass;
        theme.innerHTML = "<i class='uil uil-moon'></i>"
        window.localStorage.setItem('theme', bodyClass);
    }
})

window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
})
