const nav = document.querySelector('.nav');
const burgerBtn = nav.querySelector('.nav__burger-btn');
const navContainer = nav.querySelector('.nav__container');
const btnClose = nav.querySelector('.nav__close-btn');

burgerBtn.addEventListener('click', () => {
    nav.classList.add('nav--opened');
})

btnClose.addEventListener('click', () =>{
    nav.classList.remove('nav--opened');
})