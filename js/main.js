// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Footer year (guard for pages without #year)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Formspree AJAX submit — stays on page and shows success message
const form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.innerHTML = '<p style="text-align:center;font-size:1.15rem;padding:1rem 0;line-height:1.7;">Thank you! Your inquiry has been sent. We will reply within 24 hours.<br><a href="https://wa.me/8615319949017" target="_blank" rel="noopener" style="color:var(--brand);font-weight:600;">Chat with us on WhatsApp instead →</a></p>';
      } else {
        btn.disabled = false;
        btn.textContent = 'Send It Over';
        alert('Something went wrong. Please try again, or contact us via WhatsApp or email.');
      }
    } catch (err) {
      btn.disabled = false;
      btn.textContent = 'Send It Over';
      alert('Network error. Please try again, or contact us via WhatsApp or email.');
    }
  });
}
