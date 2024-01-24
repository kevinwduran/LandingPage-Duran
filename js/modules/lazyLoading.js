import form from './form.js';
export default function lazyLoading() {
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
}