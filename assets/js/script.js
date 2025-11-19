const btnMenu = document.getElementById("btn-menu");
const navMobile = document.getElementById("nav-mobile");
const iconMenu = document.getElementById("icon-menu");

btnMenu.addEventListener("click", () => {
  navMobile.classList.toggle("ativar");

  iconMenu.textContent = navMobile.classList.contains("ativar")
    ? "close"
    : "menu";
});

// Fecha o menu ao redimensionar para desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    navMobile.classList.remove("ativar");
    iconMenu.textContent = "menu";
  }
});
