// Seleciona todos os botões de curtir na página
const botoesCurtir = document.querySelectorAll('.btn-curtir');

// Adiciona um evento de clique a cada botão
botoesCurtir.forEach(botao => {
    botao.addEventListener('click', () => {
        const contadorSpan = botao.querySelector('.contador');
        let total = parseInt(contadorSpan.textContent);
        contadorSpan.textContent = total + 1;
    });
});