/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
// Menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
// Menu hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.querySelector('#nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  this.scroll >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.querySelector('#contact-message');
const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      'service_bgj7oq1',
      'template_6upy0hq',
      '#contact-form',
      'Nn8zo65Ufrq1wHadn'
    )
    .then(() => {
      // show message
      contactMessage.textContent = 'Message sent succesfully ';
      contactForm.reset();
    }),
    () => {
      // show erroe messagwe
      contactMessage.textContent = 'Message not send ';
    };
};
contactForm.addEventListener('submit', sendEmail);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.querySelector('#scroll-up');
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id');
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offSetHeight;
    const sectionTop = current.offSetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
      console.log(sectionsClass.classList);
    } else {
      sectionsClass.classList.remove('active-link');
      console.log(sectionsClass.classList);
    }
  });
};
window.addEventListener('scroll', scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});
sr.reveal(
  '.home__data, .home__social, .contact__container , footer__container'
);
// sr.reveal('.home__image', { origin: 'left' });
sr.reveal('.about__data ', { origin: 'left' });
sr.reveal('.about__image ', { origin: 'right' });
sr.reveal('.skills__data ', { origin: 'left' });
sr.reveal('.skills__content ', { origin: 'right' });
sr.reveal('.services__card ', { interval: 100 });
sr.reveal('.projects__card ', { interval: 100 });
