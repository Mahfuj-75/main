// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// typing effect
const words = [
  'C# Development',
  '.NET Framework Projects',
  'Desktop Applications',
  'Object-Oriented Programming',
  'Software Engineering',
  'Scalable Systems'
];
const el = document.getElementById('type-target');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let w = 0, c = 0, typing = true;

function tick() {
  const word = words[w];
  if (typing) {
    el.textContent = word.slice(0, ++c);
    if (c === word.length) { typing = false; return setTimeout(tick, 1100); }
  } else {
    el.textContent = word.slice(0, --c);
    if (c === 0) { typing = true; w = (w + 1) % words.length; }
  }
  setTimeout(tick, typing ? 70 : 35);
}
if (!reduce) tick();

// mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// highlight the nav link of the section in view
const links = [...menu.querySelectorAll('a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach(a => {
  const s = document.querySelector(a.getAttribute('href'));
  if (s) spy.observe(s);
});