const placeholders = document.querySelectorAll('.placeholder a[data-iframe="true"]');
const popup = document.getElementById('popup');
const iframe = document.getElementById('iframe');
const closeButton = document.querySelector('.close');

placeholders.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    iframe.src = href;
    popup.classList.add('active');
  });
});

closeButton.addEventListener('click', () => {
  popup.classList.remove('active');
  iframe.src = '';
});