/* small nav toggle for mobile */
document.querySelectorAll('.nav-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const nav = btn.closest('.topbar').querySelector('.nav');
    nav.classList.toggle('open');
  });
});

/* contact form handler (simple alert) */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! Your message has been sent.');
    form.reset();
  });
}

/* small reveal animation on load */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card, .project-full, .avatar-wrap, .headline, .lead')
    .forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(12px)';
      setTimeout(() => {
        el.style.transition = 'all .6s cubic-bezier(.2,.9,.2,1)';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 120 * i);
    });
});
