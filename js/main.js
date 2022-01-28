const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

const closeMenu = (e) => {
  if (!e.target.closest('.header__nav')) {
    menu.classList.remove('active');
    burger.classList.remove('active');
  }
};

const toggleMenu = () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');

  if (menu.classList.contains('active')) {
    window.addEventListener('click', closeMenu);
  } else {
    window.removeEventListener('click', closeMenu);
  }
};

burger.addEventListener('click', toggleMenu);

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

      if (window.innerWidth <= 768 && !link.classList.contains('logo__link')) toggleMenu();
    });
  });
};

smoothScroll();
