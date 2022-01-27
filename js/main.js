const scrollHeader = () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
};

const showMenu = () => {
  const menu = document.querySelector('.header__nav');
  const burger = document.querySelector('.burger');
  const close = document.querySelector('.close');

  burger.addEventListener('click', () => {
    menu.classList.add('active');
  });

  close.addEventListener('click', () => {
    menu.classList.remove('active');
  });
};

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
      const targetPosition = target.getBoundingClientRect().top;
      const offsetPosition = targetPosition + window.pageYOffset - headerHeight;

      console.log(targetPosition);
      console.log(window.pageYOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
};

scrollHeader();
showMenu();
smoothScroll();
