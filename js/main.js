// ============================================================
// Engel Gil — blog personal
// Comportamiento compartido entre todas las páginas
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Año dinámico en el footer
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Formulario de contacto (demo local: no envía datos a ningún servidor)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.querySelector('#form-status');
      const email = document.querySelector('#contact-email').value.trim();
      if (!email) {
        status.textContent = 'Por favor escribe un correo de contacto válido.';
        return;
      }
      status.textContent = '¡Mensaje listo! Este formulario es una demo estática — conéctalo a Formspree, EmailJS o tu backend preferido para recibir mensajes reales.';
      form.reset();
    });
  }
});
