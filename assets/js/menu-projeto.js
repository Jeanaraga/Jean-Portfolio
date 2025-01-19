export function menuProjeto() {
    const textos = {
        p1: {
          titulo: "No Bullying",
          descricao:
            "Projeto escolar; é um site contra o bullying, desenvolvido para a instituição Proz. O projeto foi escolhido entre todas as matrizes da Proz. O site contém informações sobre o assunto e uma aba para fazer denúncias.",
          imagem: "./assets/img/nobullyng.PNG",
          link: "https://jeanaraga.github.io/Bully/"
        },
        p2: {
          titulo: "Snap",
          descricao:
            "Este projeto é uma landing page simples desenvolvida para uma loja virtual, com um design moderno e menu mobile interativo. O site foi criado para oferecer uma experiência de navegação fluida, garantindo acessibilidade e usabilidade em dispositivos móveis. A landing page é focada em apresentar produtos e facilitar a interação do usuário com a loja.",
          imagem: "./assets/img/desktop-preview.jpg",
          link: "https://github.com/Jeanaraga/intro-section-with-dropdown-navigation-main",
        },
        p3: {
          titulo: "Jogo da Memória ",
          descricao:
            "O conhecido jogo da memória, mas com figuras relacionadas à enfermagem. Desenvolvemos este jogo em homenagem ao Dia da Enfermagem, com quatro grupos: se acertar, continua, se perder, passa para o próximo grupo. O projeto foi muito elogiado pela direção da Proz.",
          imagem: "./assets/img/jogodamemoria.PNG",
          link:"",
        },
        p4: {
          titulo: "Sunnyside ",
          descricao:
            "Este projeto é uma landing page desenvolvida para um site de marketing pessoal, projetada para destacar habilidades, serviços e conquistas de forma atrativa e profissional. Com um design moderno e responsivo, a página inclui seções interativas, como portfólio, depoimentos e um formulário de contato, oferecendo uma experiência de navegação intuitiva e funcional para visitantes em qualquer dispositivo.",
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
    
      botao.addEventListener("click", () => listaProjeto.classList.toggle("projeto-ativado"));
      window.addEventListener("resize", () => (window.innerWidth > 768 ? listaProjeto.classList.remove("projeto-ativado") : null));
    }