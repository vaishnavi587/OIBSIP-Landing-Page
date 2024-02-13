// Initialize AOS library for scroll animations
AOS.init({
  duration: 1000,
  once: true // Animate only once on scroll
});



const card = document.querySelector('.card[data-aos="fade-right"]');

setTimeout(() => {
  card.classList.add('aos-animate');
}, 100);

  
  
  