document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelectorAll('.open-accordion-btn');

  button.forEach(btn => {
    btn.addEventListener('click', () => {
      const faqItem = btn.closest('.faq-list-item');
      const accContent = faqItem.querySelector('.faq-list-hiden-text');

      faqItem.classList.toggle('active');

      if (faqItem.classList.contains('active')) {
        accContent.style.maxHeight = accContent.scrollHeight + 'px';
        accContent.style.padding = '10px 24px';
        faqItem.style.height = '118px';
      } else {
        accContent.style.maxHeight = null;
        accContent.style.padding = null;
        faqItem.style.height = null;
      }
    });
  });
});
