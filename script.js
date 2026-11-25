// Reveal sections gently as they enter the viewport. They stay visible after appearing.
document.documentElement.classList.add('js');
const revealTargets = document.querySelectorAll('.manifesto, .section-heading, .step-card, .quiet-quote, .waitlist-copy, .form-card, .faq-section > div, .site-footer > *');
revealTargets.forEach((element) => element.classList.add('reveal'));
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add('visible'));
}
