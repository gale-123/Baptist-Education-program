function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => {
    p.style.display = 'none';
  });
  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }
  window.scrollTo(0, 0);
  document.getElementById('navLinks').classList.remove('show');
}

function submitForm(e) {
  e.preventDefault();
  const cname = document.getElementById('cname').value;
  const level = document.getElementById('level').value;
  const mode = document.getElementById('mode').value;
  const phone = document.getElementById('phone').value;
  document.getElementById('msg').innerText =
    '✅ Thank you! Application for ' + cname + ' (' + level + ', ' + mode +
    ') received. We will call ' + phone + ' soon. Or WhatsApp us on +211 924 229 260.';
  e.target.reset();
}

function contactForm(e) {
  e.preventDefault();
  document.getElementById('cmsg').innerText =
    '✅ Message sent! We will get back to you soon on +211 924 229 260.';
  e.target.reset();
}
