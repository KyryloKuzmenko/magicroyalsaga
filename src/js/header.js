document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('.burger-btn');
  const closeMenuBtn = document.querySelector('.close-burger-btn');
  const backdrop = document.querySelector('.backdrop');

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
})