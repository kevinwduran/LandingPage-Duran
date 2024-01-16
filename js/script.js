import SlidesAnimation from './modules/slides.js';
import photoGalleryClick from './modules/photoGalleryAc.js';
import changeContentControls from './modules/changeContentControls.js';
import form from './modules/form.js';
import menuHamb from './modules/clickMenuHamb.js';

const slidesAnimation = new SlidesAnimation('input[name="radio-btn"]', '.manual-navegacao label');
slidesAnimation.init();

photoGalleryClick();
changeContentControls();
menuHamb();

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('[data-src], [src^="/img"]');
    const contatoElement = document.getElementById('contato');
 
    if (contatoElement) {
       form();
    }
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                const dataSrc = lazyImage.getAttribute('data-src') || lazyImage.getAttribute('src');

                if (dataSrc) {
                    lazyImage.src = dataSrc;
                    observer.unobserve(lazyImage);
                    /*console.log(`Imagem carregada: ${dataSrc}`);*/
                }
            }
        });
    });

    lazyImages.forEach(function(lazyImage) {
        observer.observe(lazyImage);
    });
});

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

import SlideNav from './modules/slide.js';

const slide = new SlideNav('.slide-wrapper', '.slide');
slide.init();

slide.addControl('.custom-control');