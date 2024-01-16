/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/changeContentControls.js":
/*!*********************************************!*\
  !*** ./js/modules/changeContentControls.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeContentControls)\n/* harmony export */ });\nconst img1 = document.getElementById('img1');\r\nconst img2 = document.getElementById('img2');\r\nconst img3 = document.getElementById('img3');\r\n// changeContentControls.js\r\nfunction changeContentControls(numero) {\r\n\r\n    if(img1 && img2 && img3){\r\n      // Oculta todos os conteúdos\r\n    for (let i = 1; i <= 3; i++) {\r\n      const conteudo = document.getElementById(`conteudo${i}`);\r\n      if (conteudo) {\r\n        conteudo.style.display = 'none';\r\n      }\r\n    }\r\n    // Exibe o conteúdo correspondente ao número clicado\r\n    const conteudoAtual = document.getElementById(`conteudo${numero || 1}`);\r\n      if (conteudoAtual) {\r\n        conteudoAtual.style.display = 'block';\r\n        conteudoAtual.classList.add('transicao-esquerda'); \r\n      }\r\n      document.getElementById('img1').addEventListener('click', () => changeContentControls(1));\r\n      document.getElementById('img2').addEventListener('click', () => changeContentControls(2));\r\n      document.getElementById('img3').addEventListener('click', () => changeContentControls(3));\r\n    }\r\n}\r\nchangeContentControls();  \r\n\r\n  \n\n//# sourceURL=webpack:///./js/modules/changeContentControls.js?");

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\n// form.js\r\nfunction form() {\r\n  const contato = document.getElementById('contato');\r\n\r\n  function handleKeyUp(event) {\r\n     const target = event.target;\r\n\r\n     if (!target.checkValidity()) {\r\n        target.classList.add('invalido');\r\n        target.nextElementSibling.innerText = target.validationMessage;\r\n     } else if (target.checkValidity()) {\r\n        target.classList.remove('invalido');\r\n        target.nextElementSibling.innerText = '';\r\n     }\r\n  }\r\n  contato.addEventListener('keyup', handleKeyUp);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/form.js?");

/***/ }),

/***/ "./js/modules/photoGalleryAc.js":
/*!**************************************!*\
  !*** ./js/modules/photoGalleryAc.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ photoGalleryClick)\n/* harmony export */ });\n// galeria de fotos acionamentos\r\nfunction photoGalleryClick() {\r\n    const galeria = document.querySelectorAll('.acionamentos-imgs img');\r\n    const galeriaContainer = document.querySelector('.acionamentos-imgs');\r\n\r\n    function trocarImagem(event) {\r\n        const img = event.currentTarget;\r\n        const media = matchMedia('(min-width:100px)').matches; //vê se o min-width é menor que 1000px\r\n        if (media) { // se é menor de 1000px fazer, senão não\r\n            galeriaContainer.prepend(img);\r\n        };\r\n    };\r\n\r\n    function eventosGaleria(img) {\r\n        img.addEventListener('click', trocarImagem);\r\n    };\r\n\r\n    galeria.forEach(eventosGaleria);\r\n\r\n    // Animação menu abrir/fechar mobile\r\n    let nav_ul = document.querySelector('.header-menu');\r\n    function openMenu() {\r\n        nav_ul.classList.add('open');\r\n    };\r\n    function closeMenu() {\r\n        nav_ul.classList.remove('open');\r\n    };\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/photoGalleryAc.js?");

/***/ }),

/***/ "./js/modules/slides.js":
/*!******************************!*\
  !*** ./js/modules/slides.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SlidesAnimation)\n/* harmony export */ });\nclass SlidesAnimation {\r\n    constructor(radioBtnSelector, labelSelector) {\r\n        // Seleciona os inputs de rádio e as labels com base nos seletores fornecidos\r\n        this.radioInputs = document.querySelectorAll(radioBtnSelector);\r\n        this.labelElements = document.querySelectorAll(labelSelector);\r\n        \r\n        // Variáveis para controle do intervalo e contador\r\n        this.intervalId = null;\r\n        this.contador = 1;\r\n    }\r\n\r\n    // Atualiza a classe 'checked' na label correspondente ao input de rádio selecionado\r\n    updateCheckedLabel() {\r\n        this.radioInputs.forEach((radioInput, index) => {\r\n            if (radioInput.checked) {\r\n                // Remove a classe 'checked' de todas as labels e adiciona à label correspondente\r\n                this.labelElements.forEach((labelElement) => {\r\n                    labelElement.classList.remove('checked');\r\n                });\r\n                this.labelElements[index].classList.add('checked');\r\n            }\r\n        });\r\n    }\r\n\r\n    // Avança para a próxima imagem no intervalo de tempo\r\n    nextImage() {\r\n        for (let i = 0; i < this.radioInputs.length; i++) {\r\n            if (this.radioInputs[i].checked) {\r\n                this.contador = i + 1;\r\n                break;\r\n            }\r\n        }\r\n\r\n        const nextIndex = (this.contador % 4) + 1;\r\n        const radioElement = document.getElementById('radio' + nextIndex);\r\n\r\n        if (radioElement) {\r\n            radioElement.checked = true;\r\n            this.updateCheckedLabel();\r\n        }\r\n    }\r\n\r\n    // Inicia o intervalo de troca automática de imagens\r\n    startInterval() {\r\n        this.intervalId = setInterval(() => {\r\n            this.nextImage();\r\n        }, 3000);\r\n    }\r\n\r\n    // Manipula o clique nos inputs de rádio para pausar e reiniciar o intervalo\r\n    handleRadioClick() {\r\n        clearInterval(this.intervalId);\r\n        setTimeout(() => {\r\n            this.startInterval();\r\n        }, 2000);\r\n    }\r\n\r\n    // Inicializa a classe, adicionando eventos e configurando o estado inicial\r\n    init() {\r\n        // Adiciona a classe 'checked' à primeira label quando a página carrega\r\n        const firstLabel = this.labelElements[0];\r\n        if (firstLabel) {\r\n            firstLabel.classList.add('checked');\r\n        }\r\n\r\n        // Adiciona listener para pausar e reiniciar o intervalo quando um input é clicado\r\n        this.radioInputs.forEach((radioInput) => {\r\n            radioInput.addEventListener('click', () => this.handleRadioClick());\r\n        });\r\n\r\n        // Inicia o intervalo automaticamente\r\n        this.startInterval();\r\n\r\n        // Adiciona listener para atualizar a label quando um input é clicado\r\n        this.radioInputs.forEach((radioInput) => {\r\n            radioInput.addEventListener('click', () => this.updateCheckedLabel());\r\n        });\r\n\r\n        // Adiciona event listener para atualizar a label quando a imagem muda automaticamente\r\n        document.addEventListener('change', () => this.updateCheckedLabel());\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/modules/slides.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slides_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slides.js */ \"./js/modules/slides.js\");\n/* harmony import */ var _modules_photoGalleryAc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/photoGalleryAc.js */ \"./js/modules/photoGalleryAc.js\");\n/* harmony import */ var _modules_changeContentControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/changeContentControls.js */ \"./js/modules/changeContentControls.js\");\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form.js */ \"./js/modules/form.js\");\n\r\n\r\n\r\n\r\n\r\nconst slidesAnimation = new _modules_slides_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('input[name=\"radio-btn\"]', '.manual-navegacao label');\r\nslidesAnimation.init();\r\n(0,_modules_photoGalleryAc_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_changeContentControls_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    const lazyImages = document.querySelectorAll('[data-src], [src^=\"/img\"]');\r\n    const contatoElement = document.getElementById('contato');\r\n \r\n    if (contatoElement) {\r\n       (0,_modules_form_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    }\r\n    let observer = new IntersectionObserver(function(entries, observer) {\r\n        entries.forEach(function(entry) {\r\n            if (entry.isIntersecting) {\r\n                const lazyImage = entry.target;\r\n                const dataSrc = lazyImage.getAttribute('data-src') || lazyImage.getAttribute('src');\r\n\r\n                if (dataSrc) {\r\n                    lazyImage.src = dataSrc;\r\n                    observer.unobserve(lazyImage);\r\n                    /*console.log(`Imagem carregada: ${dataSrc}`);*/\r\n                }\r\n            }\r\n        });\r\n    });\r\n\r\n    lazyImages.forEach(function(lazyImage) {\r\n        observer.observe(lazyImage);\r\n    });\r\n});\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    let header = document.querySelector('.header');\r\n\r\n    // Verifica se o elemento .header existe\r\n    if (header) {\r\n        let tamanhoElemento = header.offsetHeight;\r\n\r\n        let header_bg = document.querySelector('.header-bg');\r\n        if (header_bg) {\r\n            header_bg.style.height = tamanhoElemento + 'px';\r\n        }\r\n\r\n        let introducao = document.querySelector('.introducao');\r\n        if (introducao) {\r\n            introducao.style.marginTop = tamanhoElemento + 'px';\r\n        }\r\n    }\r\n});\r\nconsole.log('neyneyneyney')\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;