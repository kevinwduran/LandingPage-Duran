export default function menuHamb() {
  let close = document.querySelector(".close-icon");
  let open = document.querySelector(".menu-icon");
  let nav_ul = document.querySelector(".header-menu");

  function openMenu() {
    nav_ul.classList.add("open");
  }
  function closeMenu() {
    nav_ul.classList.remove("open");
  }
  open.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
}
