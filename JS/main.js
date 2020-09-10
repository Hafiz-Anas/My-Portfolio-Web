//PRELOADER
const preloader = document.querySelector('.preloader');

window.addEventListener('load', ()=> {
  preloader.classList.add('hide-preloader');
});

//RESPONSIVE NAVIGATION
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s  ease forwards  ${index / 7 + 0.3}s`;
        }
    });
    burger.classList.toggle('toggle');
});

//BUTTON TO TOP LINK
const topLink = document.querySelector('.top-link');
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 500) {
      topLink.classList.add('show-link');
    } else {
      topLink.classList.remove('show-link');
    }
  });
  
  