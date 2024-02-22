import SlidesAnimation from "./modules/slides.js";
import photoGalleryClick from "./modules/photoGalleryAc.js";
import changeContentControls from "./modules/changeContentControls.js";
import menuHamb from "./modules/clickMenuHamb.js";
import lazyLoading from "./modules/lazyLoading.js";

const slidesAnimation = new SlidesAnimation(
  'input[name="radio-btn"]',
  ".manual-navegacao label",
);
slidesAnimation.init();

photoGalleryClick();
changeContentControls();
menuHamb();
lazyLoading();


document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header");

  // Verifica se o elemento .header existe
  if (header) {
    let tamanhoElemento = header.offsetHeight;

    let header_bg = document.querySelector(".header-bg");
    if (header_bg) {
      header_bg.style.height = tamanhoElemento + "px";
    }

    let introducao = document.querySelector(".introducao");
    if (introducao) {
      introducao.style.marginTop = tamanhoElemento + "px";
    }
  }
});

import SlideNav from "./modules/slide.js";

const slide = new SlideNav(".slide-wrapper", ".slide-big");
slide.init();

slide.addControl(".custom-control");
