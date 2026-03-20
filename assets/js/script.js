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


const dataNascimento = new Date("2005-03-04"); 
const idadeElement = document.getElementById("idade");

function calcularIdade() {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const mes = hoje.getMonth() - dataNascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }

  idadeElement.textContent = idade;
}

calcularIdade();