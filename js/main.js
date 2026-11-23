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

// Formspree AJAX submit — stays on page and shows success message
const form = document.getElementById('quoteForm');
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
      form.innerHTML = '<p style="text-align:center;font-size:1.15rem;padding:1rem 0;">Thank you! Your inquiry has been sent. We will reply within 24 hours.</p>';
    } else {
      btn.disabled = false;
      btn.textContent = 'Send Inquiry';
      alert('Something went wrong. Please try again, or contact us via WhatsApp or email.');
    }
  } catch (err) {
    btn.disabled = false;
    btn.textContent = 'Send Inquiry';
    alert('Network error. Please try again, or contact us via WhatsApp or email.');
  }
});
