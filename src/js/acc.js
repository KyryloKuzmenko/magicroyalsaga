
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq-list-item');

  items.forEach(item => {
    const titleWrap = item.querySelector('.faq-list-title-wrap');
    const content = item.querySelector('.faq-list-hiden-text');

    titleWrap.addEventListener('click', () => {
      item.classList.toggle('active');

      if (item.classList.contains('active')) {
        content.style.padding = '10px 24px';
      } else {
        content.style.padding = '0 24px';
      }
    });
  });
});
