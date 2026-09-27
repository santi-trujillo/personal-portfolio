document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nx-nav-item');
  const views = document.querySelectorAll('.nx-view');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remover clase activa de todos los botones y vistas
      navItems.forEach(nav => nav.classList.remove('nx-active'));
      views.forEach(view => view.classList.remove('nx-active-view'));

      // Activar el botón seleccionado
      item.classList.add('nx-active');

      // Activar la vista correspondiente usando el data-target
      const targetId = item.getAttribute('data-target');
      document.getElementById(targetId).classList.add('nx-active-view');
    });
  });
});
