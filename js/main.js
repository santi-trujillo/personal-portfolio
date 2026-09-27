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

  // 2. Toggler de Tarjetas de Proyecto (Dev View)
  const toggleBtns = document.querySelectorAll('.nx-project-toggle-btn');
  
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.nx-project-card');
      card.classList.toggle('nx-open');
    });
  });
});
