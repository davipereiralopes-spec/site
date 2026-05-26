
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Ação do Botão "Conheça a História" (Scroll Suave)
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    btnSaibaMais.addEventListener("click", () => {
        document.getElementById("historia").scrollIntoView({ behavior: "smooth" });
    });

    // 2. Efeito de Contador Animado para a seção de Títulos
    const contadores = document.querySelectorAll(".contador");
    
    const animarContadores = () => {
        contadores.forEach(contador => {
            const numeroFinal = +contador.getAttribute("data-target");
            const numeroAtual = +contador.innerText;

            // Define a velocidade do efeito
            const incremento = numeroFinal / 50;

            if (numeroAtual < numeroFinal) {
                contador.innerText = Math.ceil(numeroAtual + incremento);
