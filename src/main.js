import { greet } from './utils.js';

const content = document.getElementById('content');
const links = document.querySelectorAll('a[data-link]');

function setActiveLink(path) {
  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function navigateTo(url) {
  const path = url === '/' ? '/home' : url;
  fetch(`/src/pages${path}.html`)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
      history.pushState(null, '', url);
      setActiveLink(url);

      // Test du module
      console.log(greet('Hiba'));
    });
}

// Initial load
navigateTo(location.pathname);

// Intercept links
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const url = link.getAttribute('href');
    navigateTo(url);
  });
});

// Support pour les boutons précédent/suivant
window.addEventListener('popstate', () => {
  navigateTo(location.pathname);
});
