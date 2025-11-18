// =========================
// MENU MOBILE
// =========================
function menuMobile() {
    const btnMenu = document.getElementById('btn-menu');
    btnMenu.addEventListener('click', function() {
        let navMobile = document.getElementById('nav-mobile');
        let iconMenu = document.getElementById('icon-menu');

        navMobile.classList.toggle('ativar');

        if (navMobile.classList.contains('ativar')) {
            iconMenu.innerHTML = 'close';
        } else {
            iconMenu.innerHTML = "menu";
            navMobile.classList.remove('ativar');
        }

        function verificarTamanhoTela() {
            const larguraTela = window.innerWidth;

            if (larguraTela > 720) {
                iconMenu.innerHTML = "menu";
                navMobile.classList.remove('ativar');
            }
        }

        verificarTamanhoTela();
        window.addEventListener('resize', verificarTamanhoTela);
    });
}



// =========================
// MENU DE PROJETOS
// =========================
function menuProjeto() {
    const textos = {
        p1: {
          titulo: "No Bullying",
          descricao:
            "Projeto escolar; é um site contra o bullying, desenvolvido para a instituição Proz. O projeto foi escolhido entre todas as matrizes da Proz. O site contém informações sobre o assunto e uma aba para fazer denúncias.",
          imagem: "./assets/img/nobullyng.PNG",
          link: "https://jeanaraga.github.io/Bully/"
        },
        p2: {
          titulo: "Ana Luiza Nutrição",
          descricao:
            "O Projeto Ana Luiza Nutrição é uma landing page profissional desenvolvida especialmente para destacar o trabalho da nutricionista Ana Luiza de forma clara, moderna e totalmente focada em conversão.",
          imagem: "./assets/img/analuiza.png",
          link: "https://analuizanutri.github.io/Nutricionista/",
        },
        p3: {
          titulo: "Jogo da Memória",
          descricao:
            "O conhecido jogo da memória com figuras de enfermagem, feito em homenagem ao Dia da Enfermagem.",
          imagem: "./assets/img/jogodamemoria.PNG",
          link:"",
        },
        p4: {
          titulo: "Sunnyside",
          descricao:
            "Landing page moderna de marketing pessoal, com seções de portfólio, depoimentos e contato.",
          imagem: "./assets/img/desktop-preview (1).jpg",
          link:"https://jeanaraga.github.io/Pagina-de-Destino-Agencia/"
        },
    };

    const imgProjeto = document.getElementById("imagem-projeto");
    const descricaoProjeto = document.getElementById("descricao-projeto");
    const linkProjeto = document.getElementById('link');
    const botao = document.getElementById("botao-projeto");
    const listaProjeto = document.getElementById("lista-projeto");
    const inputs = document.querySelectorAll(".input-field input");

    function mostrarConteudo(projeto) {
        imgProjeto.src = projeto.imagem;
        descricaoProjeto.innerHTML = `<span>${projeto.titulo}</span> ${projeto.descricao}`;
        linkProjeto.href = projeto.link;
    }
  
    function selecionarProjeto(projeto, input) {
        listaProjeto.classList.remove("projeto-ativado");
        inputs.forEach((otherInput) => (otherInput.checked = false));
        input.checked = true;
        mostrarConteudo(projeto);
    }
  
    function adicionarEvento(projeto, input) {
        input.addEventListener("click", () => selecionarProjeto(projeto, input));
    }
  
    Object.entries(textos).forEach(([key, projeto], index) => {
        const elementoProjeto = document.getElementById(`p${index + 1}`);
        const input = elementoProjeto.querySelector("input");
        adicionarEvento(projeto, input);
    });
  
    botao.addEventListener("click", () => 
        listaProjeto.classList.toggle("projeto-ativado")
    );

    window.addEventListener("resize", () => 
        (window.innerWidth > 768 ? listaProjeto.classList.remove("projeto-ativado") : null)
    );
}



// =========================
// INICIALIZAÇÃO
// =========================
menuMobile();
menuProjeto();
