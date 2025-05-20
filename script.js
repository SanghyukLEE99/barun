document.getElementById('nav-toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('open');
});

let idx = 0;
const slides = document.querySelectorAll('.slide');
const showSlide = i => {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
};

document.querySelector('.next').addEventListener('click', () => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
});

document.querySelector('.prev').addEventListener('click', () => {
  idx = (idx - 1 + slides.length) % slides.length;
  showSlide(idx);
});

setInterval(() => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 5000);
