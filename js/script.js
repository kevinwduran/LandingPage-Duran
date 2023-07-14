// slides:
document.addEventListener('DOMContentLoaded', function() {
    let header = document.querySelector('.header');
    let tamanhoElemento = header.offsetHeight;
  
    let header_bg = document.querySelector('.header-bg');
    header_bg.style.height = tamanhoElemento + 'px';
    let introducao = document.querySelector('.introducao');
    introducao.style.marginTop = tamanhoElemento + 'px';
  });

let contador = 1;
document.getElementById('radio1').checked = true;
setInterval(function(){
    nextImage();
}, 3000)

function nextImage(){
    contador++;
    if(contador > 4){
        contador = 1;
    }
    document.getElementById('radio'+contador).checked = true;
}
