export function menuMobile() {
    const btnMenu = document.getElementById('btn-menu');
    btnMenu.addEventListener('click', function() {
        let navMobile = document.getElementById('nav-mobile');
        let iconMenu = document.getElementById('icon-menu');
        

        navMobile.classList.toggle('ativar');

        if(navMobile.classList.contains('ativar')) {
            iconMenu.innerHTML = 'close';
        } else {
            iconMenu.innerHTML = "menu";
            navMobile.classList.remove('ativar');
        }

        function verificarTamanhoTela() {
            const larguraTela = window.innerWidth;

            if(larguraTela > 720) {
                iconMenu.innerHTML = "menu";
                navMobile.classList.remove('ativar');
            }
        }

        verificarTamanhoTela();
        window.addEventListener('resize', verificarTamanhoTela);
    });
};