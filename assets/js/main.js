// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox simples com melhorias de acessibilidade
const cards = document.querySelectorAll('.card');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
let lastActiveElement = null;

function openLightbox(src, alt) {
  if (!src) return;
  lastActiveElement = document.activeElement;
  lightboxImg.src = src;
  lightboxImg.alt = alt || 'Imagem do projeto em foco';
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Move foco para o botão fechar
  if (lightboxClose) lightboxClose.focus();
}

function closeLightbox(){
  lightbox.setAttribute('aria-hidden','true');
  lightboxImg.src = '';
  document.body.style.overflow = '';
  // Retorna foco ao elemento anterior
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus();
  }
}

cards.forEach(card => {
  const thumb = card.querySelector('img');
  const alt = thumb ? thumb.alt : '';

  card.addEventListener('click', () => {
    const src = card.getAttribute('data-lightbox');
    openLightbox(src, alt);
  });

  // Acesso por teclado
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const src = card.getAttribute('data-lightbox');
      openLightbox(src, alt);
    }
  });
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){ closeLightbox(); }
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){ closeLightbox(); }
});

// Expondo closeLightbox para o atributo inline do botão
window.closeLightbox = closeLightbox;

