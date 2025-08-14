// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox simples
const cards = document.querySelectorAll('.card');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const src = card.getAttribute('data-lightbox');
    if(src){
      lightboxImg.src = src;
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow = 'hidden';
    }
  })
})

function closeLightbox(){
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){ closeLightbox(); }
})
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){ closeLightbox(); }
})
