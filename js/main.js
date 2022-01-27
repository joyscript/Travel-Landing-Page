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

scrollHeader();
showMenu();
