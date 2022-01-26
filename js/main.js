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

scrollHeader();
