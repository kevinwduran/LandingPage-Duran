import initSlidesAnimation from './modules/slides.js';
import photoGalleryClick from './modules/photoGalleryAc.js';
import changeContentControls from './modules/changeContentControls.js';
import form from './modules/form.js';

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('[data-src]');

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var lazyImage = entry.target;
                lazyImage.src = lazyImage.getAttribute('data-src');
                observer.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(function(lazyImage) {
        observer.observe(lazyImage);
    });
});


initSlidesAnimation();
photoGalleryClick();
changeContentControls();
form();


// No script.js
document.getElementById('img1').addEventListener('click', () => changeContentControls(1));
document.getElementById('img2').addEventListener('click', () => changeContentControls(2));
document.getElementById('img3').addEventListener('click', () => changeContentControls(3));
