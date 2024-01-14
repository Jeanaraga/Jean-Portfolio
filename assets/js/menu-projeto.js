export function menuProjeto() {
    const textos = {
        p1: {
          titulo: "No Bullying: ",
          descricao:
            "Projeto escolar; é um site contra o bullying, desenvolvido para a instituição Proz. O projeto foi escolhido entre todas as matrizes da Proz. O site contém informações sobre o assunto e uma aba para fazer denúncias.",
          imagem: "./assets/img/nobullyng.PNG",
          link: "https://jeanaraga.github.io/Bully/"
        },
        p2: {
          titulo: "SB Filmes: ",
          descricao:
            "Projeto escolar; é um site de gerenciamento de filmes, provavelmente o site mais complexo que já fiz. Há opções de cadastro e login usando localStorage, além de opções para curtir e descurtir filmes.",
          imagem: "./assets/img/sbfilmes.PNG",
          link: "",
        },
        p3: {
          titulo: "Jogo da Memória: ",
          descricao:
            "Projeto escolar; o conhecido jogo da memória, mas com figuras relacionadas à enfermagem. Desenvolvemos este jogo em homenagem ao Dia da Enfermagem, com quatro grupos: se acertar, continua, se perder, passa para o próximo grupo. O projeto foi muito elogiado pela direção da Proz.",
          imagem: "./assets/img/jogodamemoria.PNG",
          link:"",
        },
        p4: {
          titulo: "Calculadora de Gorjeta: ",
          descricao:
            "Projeto pessoal; uma calculadora de gorjeta em que você pode definir por quantas pessoas vai dividir a conta, a porcentagem de gorjeta para o garçom e o valor total da conta. O resultado mostra quanto cada pessoa deve pagar.",
          imagem: "./assets/img/calculadora.png",
          link:""
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