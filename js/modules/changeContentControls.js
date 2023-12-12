
// changeContentControls.js
export default function changeContentControls(numero) {
    console.log(`Função changeContentControls chamada com o número ${numero}`);
  
    // Oculta todos os conteúdos
    for (let i = 1; i <= 3; i++) {
      const conteudo = document.getElementById(`conteudo${i}`);
      if (conteudo) {
        conteudo.style.display = 'none';
        console.log(`Ocultando conteudo${i}`);
      }
    }
  
    // Exibe o conteúdo correspondente ao número clicado
    const conteudoAtual = document.getElementById(`conteudo${numero || 1}`);
  if (conteudoAtual) {
    conteudoAtual.style.display = 'block';
    conteudoAtual.classList.add('transicao-esquerda'); // Adiciona a classe de transição
    console.log(`Exibindo conteudo${numero || 1}`);
  } else {
    console.log(`Conteudo${numero || 1} não encontrado`);
  }
}
  changeContentControls();  
  