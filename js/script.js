import initSlidesAnimation from './modules/slides.js';
import photoGalleryClick from './modules/photoGalleryAc.js';
import changeContentControls from './modules/changeContentControls.js';
import form from './modules/form.js';

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('[data-src]');

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.setAttribute('src', lazyImage.getAttribute('data-src'));
                observer.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(function(lazyImage) {
        observer.observe(lazyImage);
    });
});

console.log('carregou aqui')
initSlidesAnimation();
photoGalleryClick();
changeContentControls();
form();

