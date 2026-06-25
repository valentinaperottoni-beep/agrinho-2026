// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {

    // ===== MENU COM ROLAGEM SUAVE =====
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ===== QUIZ =====
    const quiz = document.querySelector("select");

    if (quiz) {
        quiz.addEventListener("change", () => {

            if (quiz.value === "Rotação de culturas") {
                alert("✅ Correto! A rotação de culturas ajuda a conservar o solo.");
            } else {
                alert("❌ Essa opção não contribui para a conservação do solo.");
            }

        });
    }

    // ===== FORMULÁRIO =====
    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = formulario.querySelector('input[type="text"]').value;
            const email = formulario.querySelector('input[type="email"]').value;
            const mensagem = formulario.querySelector("textarea").value;

            if (nome === "" || email === "" || mensagem === "") {
                alert("Preencha todos os campos.");
                return;
            }

            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

            formulario.reset();
        });

    }

    // ===== CALCULADORA DE IMPACTO =====
    const botoes = document.querySelectorAll("button");

    botoes.forEach(botao => {

        if (botao.textContent.includes("Calculadora")) {

            botao.addEventListener("click", () => {

                const hectares = prompt(
                    "Quantos hectares utilizam práticas sustentáveis?"
                );

                if (!hectares) return;

                const reducao = hectares * 0.5;

                alert(
                    `🌱 Estimativa: ${reducao} toneladas de CO₂ podem ser reduzidas por ano.`
                );

            });

        }

    });

    // ===== ANIMAÇÃO DO GRÁFICO =====
    const barras = document.querySelectorAll(".bar");

    barras.forEach(barra => {

        const alturaFinal = barra.style.height;

        barra.style.height = "0px";

        setTimeout(() => {
            barra.style.transition = "height 1.5s ease";
            barra.style.height = alturaFinal;
        }, 300);

    });

});
