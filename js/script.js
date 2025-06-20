document.querySelectorAll('.gallery-container').forEach((container) => {
  const gallery = container.querySelector('.gallery');
  const backBtn = container.querySelector('.backBtn');
  const nextBtn = container.querySelector('.nextBtn');

  // Scroll amount for each click (adjust as needed)
  const scrollAmount = 300;

  // Scroll to the left
  backBtn.addEventListener('click', () => {
    gallery.scrollBy({
      top: 0,
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // Scroll to the right
  nextBtn.addEventListener('click', () => {
    gallery.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});
