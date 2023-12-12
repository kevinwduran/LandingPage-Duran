import initSlidesAnimation from './modules/slides.js';
import photoGalleryClick from './modules/photoGalleryAc.js';
import changeContentControls from './modules/changeContentControls.js';
import form from './modules/form.js';


initSlidesAnimation();
photoGalleryClick();
changeContentControls();
form();

// No script.js
document.getElementById('img1').addEventListener('click', () => changeContentControls(1));
document.getElementById('img2').addEventListener('click', () => changeContentControls(2));
document.getElementById('img3').addEventListener('click', () => changeContentControls(3));
