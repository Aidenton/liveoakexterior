/* Live Oak Exterior - main.js */

(function () {
  'use strict';

  /* --------------------------------------------------
     1. Mobile hamburger menu
  -------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const siteNav   = document.getElementById('site-nav');

  if (hamburger && siteNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !siteNav.contains(e.target)) {
        siteNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --------------------------------------------------
     2. Header scroll state
  -------------------------------------------------- */
  const header = document.getElementById('site-header');

  if (header) {
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --------------------------------------------------
     4. Active nav link highlighting
  -------------------------------------------------- */
  (function highlightNav() {
    const path  = window.location.pathname;
    const links = document.querySelectorAll('.site-nav a');

    links.forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;

      // Normalize: strip leading slash for comparison
      const linkPath = href.replace(/^\//, '');
      const currPath = path.replace(/^\//, '') || 'index.html';

      if (
        linkPath === currPath ||
        (linkPath === 'index.html' && (currPath === '' || currPath === '/'))
      ) {
        link.classList.add('active');
      }
    });
  })();

  /* --------------------------------------------------
     5. Smooth scroll for anchor hash links
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --------------------------------------------------
     6. Contact form success message
  -------------------------------------------------- */
  (function checkFormSuccess() {
    const params  = new URLSearchParams(window.location.search);
    const success = document.getElementById('form-success');
    const form    = document.getElementById('contact-form');

    if (params.get('success') === 'true' && success) {
      success.classList.add('visible');
      if (form) form.style.display = 'none';
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  })();

})();
