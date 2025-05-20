// 모바일 네비 토글
document.getElementById('nav-toggle')
  .addEventListener('click', () =>
    document.querySelector('.menu').classList.toggle('open')
  );

// 히어로 슬라이더
let idx = 0;
const slides = document.querySelectorAll('.slide');
const showSlide = i => {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
};

// Next / Prev 버튼
document.querySelector('.next')
  .addEventListener('click', () => {
    idx = (idx + 1) % slides.length;
    showSlide(idx);
  });
document.querySelector('.prev')
  .addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length;
    showSlide(idx);
  });

// 자동 재생 (5초마다)
setInterval(() => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 5000);
