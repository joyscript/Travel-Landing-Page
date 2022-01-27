const header = document.querySelector('.header');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close');

const handlerMenu = (e) => {
  if (!e.target.closest('.header')) menu.classList.remove('active');
};

close.addEventListener('click', () => {
  menu.classList.remove('active');
  window.removeEventListener('click', handlerMenu);
});

burger.addEventListener('click', () => {
  menu.classList.add('active');
  window.addEventListener('click', handlerMenu);
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

const smoothScroll = () => {
  const menulinks = document.querySelectorAll('.header__menu-link');
  const logoLinks = document.querySelectorAll('.logo__link');
  const headerHeight = document.querySelector('.header').clientHeight;

  const links = [...menulinks, ...logoLinks];

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);

      if (target) {
        const targetPosition = target.getBoundingClientRect().top;
        const offsetPosition = targetPosition + window.scrollY - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }

      if (window.innerWidth <= 768) menu.classList.remove('active');
    });
  });
};

smoothScroll();
