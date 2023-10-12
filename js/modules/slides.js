export default function initSlidesAnimation() {
    document.addEventListener('DOMContentLoaded', function () {
        let header = document.querySelector('.header');

        // Verifica se o elemento .header existe
        if (header) {
            let tamanhoElemento = header.offsetHeight;

            let header_bg = document.querySelector('.header-bg');
            if (header_bg) {
                header_bg.style.height = tamanhoElemento + 'px';
            }

            let introducao = document.querySelector('.introducao');
            if (introducao) {
                introducao.style.marginTop = tamanhoElemento + 'px';
            }
        }
    });

    let contador = 1;
    let radioElement = document.getElementById('radio1');

    // Verifica se o elemento com id 'radio1' existe
    if (radioElement) {
        radioElement.checked = true;

        // Inicia o intervalo apenas se o elemento existir
        setInterval(function () {
            nextImage();
        }, 3000);
    }

    function nextImage() {
        contador++;
        if (contador > 4) {
            contador = 1;
        }

        let radioElement = document.getElementById('radio' + contador);

        // Verifica se o elemento com o id 'radio' + contador existe
        if (radioElement) {
            radioElement.checked = true;
        }
    }
};

