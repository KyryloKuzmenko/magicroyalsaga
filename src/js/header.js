
document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.burger-btn');
  const closeMenuBtn = document.querySelector('.close-burger-btn');
  const backdrop = document.querySelector('.backdrop');
  const menuLinks = document.querySelectorAll(
    '.bd-sections-item-link, .hidden-sections-item-link, .bd-pages'
  );

  function toggleMenu(show) {
    backdrop.classList.toggle('show', show);
    openMenuBtn.style.display = show ? 'none' : 'block';
    closeMenuBtn.style.display = show ? 'block' : 'none';
  }

  openMenuBtn?.addEventListener('click', () => toggleMenu(true));
  closeMenuBtn?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });


  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');

      if (href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          const headerHeight =
            document.querySelector('.header-section').offsetHeight;
          const y =
            targetEl.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }

      if (
        link.classList.contains('bd-sections-item-link') ||
        link.classList.contains('bd-pages')
      ) {
        toggleMenu(false);
      }
    });
  });


  function highlightMenu() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY =
      window.scrollY +
      document.querySelector('.header-section').offsetHeight +
      1;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document
          .querySelectorAll(
            '.bd-sections-item-link, .hidden-sections-item-link'
          )
          .forEach(link => {
            link.classList.remove('active');
            const linkHash = new URL(link.href).hash;
            if (linkHash === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
      }
    });
  }

  window.addEventListener('scroll', highlightMenu);
  highlightMenu();
});
