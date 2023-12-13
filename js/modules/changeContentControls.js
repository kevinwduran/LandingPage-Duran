const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
// changeContentControls.js
export default function changeContentControls(numero) {

    if(img1 && img2 && img3){
      // Oculta todos os conteúdos
    for (let i = 1; i <= 3; i++) {
      const conteudo = document.getElementById(`conteudo${i}`);
      if (conteudo) {
        conteudo.style.display = 'none';
      }
    }
    // Exibe o conteúdo correspondente ao número clicado
    const conteudoAtual = document.getElementById(`conteudo${numero || 1}`);
      if (conteudoAtual) {
        conteudoAtual.style.display = 'block';
        conteudoAtual.classList.add('transicao-esquerda'); 
      }
      document.getElementById('img1').addEventListener('click', () => changeContentControls(1));
      document.getElementById('img2').addEventListener('click', () => changeContentControls(2));
      document.getElementById('img3').addEventListener('click', () => changeContentControls(3));
    }
}
  changeContentControls();  

  