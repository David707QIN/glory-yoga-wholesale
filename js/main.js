// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form success handling (Formspree will redirect/handle by default)
// If using Formspree AJAX, uncomment below and set YOUR_FORM_ID.
/*
const form = document.getElementById('quoteForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = await fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' }
  });
  if (res.ok) {
    form.innerHTML = '<p style="text-align:center;font-size:1.1rem;">Thank you! We will reply within 24 hours.</p>';
  }
});
*/
