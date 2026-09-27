document.addEventListener('DOMContentLoaded', () => {
  // 1. Enrutador SPA (Vistas)
  const navItems = document.querySelectorAll('.nx-nav-item');
  const views = document.querySelectorAll('.nx-view');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('nx-active'));
      views.forEach(view => view.classList.remove('nx-active-view'));

      item.classList.add('nx-active');
      const targetId = item.getAttribute('data-target');
      document.getElementById(targetId).classList.add('nx-active-view');
    });
  });

  // 2. Toggler de Tarjetas de Proyecto (Dev View - Bottom Sheet Peek)
  const overlays = document.querySelectorAll('.nx-project-details-overlay');
  
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      const card = overlay.closest('.nx-project-card');
      // Solo permite alternar si hace click en el header asomado, 
      // o cierra si está abierto y hacen click en el indicador de arrastre superior
      card.classList.toggle('nx-open');
    });
  });

  // 3. Toggler de Acordeones PM
  const pmCards = document.querySelectorAll('.nx-pm-card');
  
  pmCards.forEach(card => {
    card.addEventListener('click', () => {
      // Opcional: Si quieres que al abrir uno se cierren los demás, descomenta esto:
      // pmCards.forEach(c => { if(c !== card) c.classList.remove('nx-open'); });
      
      card.classList.toggle('nx-open');
    });
  });
});
