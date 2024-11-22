const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  });
});

const images = document.querySelectorAll('.projeto-img'); 
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = image.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; 
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


