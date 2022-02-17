const menu = document.querySelector('.nav-icons');
const closeBtn = document.querySelector('.close-btn');
const navContent = document.querySelector('#nav-content');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');

menu.addEventListener('click', ()=>{
    navContent.classList.add('show');
    document.body.style.overflow="hidden";
});

closeBtn.addEventListener('click', ()=>{
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
});

navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        navContent.classList.remove('show');
        document.body.style.overflow="initial";
    })
})


const newDate = document.querySelector('.date');

const preDate = new Date().getFullYear();
// console.log(preDate);
newDate.style.textContent = preDate;


const nightColor = document.querySelector('.theme .night');
const dayColor = document.querySelector('.theme .day');
const themeColor = document.querySelector('.theme');
const hero = document.querySelector('#hero');
const about = document.querySelector('#about');
const services = document.querySelector('#services');
const projects = document.querySelector('#projects');
const testimonials = document.querySelector('#testimonial');
const footer = document.querySelector('#footer');



nightColor.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "#0d081a";

    menu.classList.add('active');
    themeColor.classList.add('active');
    hero.classList.add('active');
    about.classList.add('active');
    services.classList.add('active');
    projects.classList.add('active');
    testimonials.classList.add('active');
    footer.classList.add('active');
    navContent.classList.add('active');

    dayColor.classList.remove('active');
    nightColor.classList.add('active');
});

dayColor.addEventListener('click', ()=>{
    document.body.style.backgroundColor = "#efebfa";

    menu.classList.remove('active');
    themeColor.classList.remove('active');
    hero.classList.remove('active');
    about.classList.remove('active');
    services.classList.remove('active');
    projects.classList.remove('active');
    testimonials.classList.remove('active');
    footer.classList.remove('active');
    navContent.classList.remove('active');


    nightColor.classList.remove('active');
    dayColor.classList.add('active');
});

