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

  // 2. Toggler Accesible (Click + Teclado) para Dev y PM
  const bindAccessibleToggle = (elements, toggleClass) => {
    elements.forEach(el => {
      const toggleAction = (e) => {
        // Previene scroll si se usa la barra espaciadora
        if(e.type === 'keydown' && e.key === ' ') e.preventDefault(); 
        
        const card = el.closest('.nx-project-card') || el;
        const isOpen = card.classList.toggle(toggleClass);
        el.setAttribute('aria-expanded', isOpen);
      };

      el.addEventListener('click', toggleAction);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleAction(e);
        }
      });
    });
  };

  bindAccessibleToggle(document.querySelectorAll('.nx-project-details-overlay'), 'nx-open');
  bindAccessibleToggle(document.querySelectorAll('.nx-pm-card'), 'nx-open');
});
