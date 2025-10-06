document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('nav ul li a');

  toggle.addEventListener('click', function () {
    nav.classList.toggle('nav-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 700) {
        nav.classList.remove('nav-open');
      }
    });
  });
});
