import { refs } from "./refs";

// Функція для плавного відкриття меню
function openMenu(event) {
  refs.overleyMenu.classList.add('active');
}

// Функція для плавного закриття меню
function closeMenu(event) {
  refs.overleyMenu.classList.remove('active');
}

refs.openMenuButton.addEventListener('click', () => {
  // Якщо меню неактивне, відкриваємо його
  if (!refs.overleyMenu.classList.contains('active')) {
    openMenu();
  }
});

refs.closeMenuButton.addEventListener('click', closeMenu);
refs.linkMenu.addEventListener('click', closeMenu);
