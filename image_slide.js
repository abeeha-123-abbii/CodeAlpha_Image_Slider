const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIdx = 0;


const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

function showSlide(index) {
  if (index < 0) {
    currentIdx = slides.length - 1;
  } else if (index >= slides.length) {
    currentIdx = 0;
  } else {
    currentIdx = index;
  }

  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  slides[currentIdx].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIdx - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIdx + 1);
});

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    lightboxImage.src = slide.src;
    lightbox.style.display = 'flex';
  });
}); 


lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

showSlide(0);