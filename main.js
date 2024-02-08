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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeContentControls)\n/* harmony export */ });\nvar img1 = document.getElementById('img1');\nvar img2 = document.getElementById('img2');\nvar img3 = document.getElementById('img3');\n// changeContentControls.js\nfunction changeContentControls(numero) {\n  if (img1 && img2 && img3) {\n    // Oculta todos os conteúdos\n    for (var i = 1; i <= 3; i++) {\n      var conteudo = document.getElementById(\"conteudo\".concat(i));\n      if (conteudo) {\n        conteudo.style.display = 'none';\n      }\n    }\n    // Exibe o conteúdo correspondente ao número clicado\n    var conteudoAtual = document.getElementById(\"conteudo\".concat(numero || 1));\n    if (conteudoAtual) {\n      conteudoAtual.style.display = 'block';\n      conteudoAtual.classList.add('transicao-esquerda');\n    }\n    document.getElementById('img1').addEventListener('click', function () {\n      return changeContentControls(1);\n    });\n    document.getElementById('img2').addEventListener('click', function () {\n      return changeContentControls(2);\n    });\n    document.getElementById('img3').addEventListener('click', function () {\n      return changeContentControls(3);\n    });\n  }\n}\nchangeContentControls();\n\n//# sourceURL=webpack:///./js/modules/changeContentControls.js?");

/***/ }),

/***/ "./js/modules/clickMenuHamb.js":
/*!*************************************!*\
  !*** ./js/modules/clickMenuHamb.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuHamb)\n/* harmony export */ });\nfunction menuHamb() {\n  var close = document.querySelector(\".close-icon\");\n  var open = document.querySelector(\".menu-icon\");\n  var nav_ul = document.querySelector(\".header-menu\");\n  function openMenu() {\n    nav_ul.classList.add(\"open\");\n  }\n  function closeMenu() {\n    nav_ul.classList.remove(\"open\");\n  }\n  open.addEventListener('click', openMenu);\n  close.addEventListener('click', closeMenu);\n}\n\n//# sourceURL=webpack:///./js/modules/clickMenuHamb.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    if (timer) {\n      clearTimeout(timer);\n    }\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack:///./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\n// form.js\nfunction form() {\n  var contato = document.getElementById('contato');\n  function handleKeyUp(event) {\n    var target = event.target;\n    if (!target.checkValidity()) {\n      target.classList.add('invalido');\n      target.nextElementSibling.innerText = target.validationMessage;\n    } else if (target.checkValidity()) {\n      target.classList.remove('invalido');\n      target.nextElementSibling.innerText = '';\n    }\n  }\n  contato.addEventListener('keyup', handleKeyUp);\n}\n\n//# sourceURL=webpack:///./js/modules/form.js?");

/***/ }),

/***/ "./js/modules/lazyLoading.js":
/*!***********************************!*\
  !*** ./js/modules/lazyLoading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ lazyLoading)\n/* harmony export */ });\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./js/modules/form.js\");\n\nfunction lazyLoading() {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var lazyImages = document.querySelectorAll('[data-src], [src^=\"/img\"]');\n    var contatoElement = document.getElementById('contato');\n    if (contatoElement) {\n      (0,_form_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n    var observer = new IntersectionObserver(function (entries, observer) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          var lazyImage = entry.target;\n          var dataSrc = lazyImage.getAttribute('data-src') || lazyImage.getAttribute('src');\n          if (dataSrc) {\n            lazyImage.src = dataSrc;\n            observer.unobserve(lazyImage);\n          }\n        }\n      });\n    });\n    lazyImages.forEach(function (lazyImage) {\n      observer.observe(lazyImage);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/lazyLoading.js?");

/***/ }),

/***/ "./js/modules/photoGalleryAc.js":
/*!**************************************!*\
  !*** ./js/modules/photoGalleryAc.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ photoGalleryClick)\n/* harmony export */ });\n// galeria de fotos acionamentos\nfunction photoGalleryClick() {\n  var galeria = document.querySelectorAll('.acionamentos-imgs img');\n  var galeriaContainer = document.querySelector('.acionamentos-imgs');\n  function trocarImagem(event) {\n    var img = event.currentTarget;\n    var media = matchMedia('(min-width:100px)').matches; //vê se o min-width é menor que 1000px\n    if (media) {\n      // se é menor de 1000px fazer, senão não\n      galeriaContainer.prepend(img);\n    }\n    ;\n  }\n  ;\n  function eventosGaleria(img) {\n    img.addEventListener('click', trocarImagem);\n  }\n  ;\n  galeria.forEach(eventosGaleria);\n\n  // Animação menu abrir/fechar mobile\n  var nav_ul = document.querySelector('.header-menu');\n  function openMenu() {\n    nav_ul.classList.add('open');\n  }\n  ;\n  function closeMenu() {\n    nav_ul.classList.remove('open');\n  }\n  ;\n}\n;\n\n//# sourceURL=webpack:///./js/modules/photoGalleryAc.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slide: () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\n\n\nfunction _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t).constructor) : o.apply(t, e)); }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\n // para resize\n\nvar Slide = /*#__PURE__*/function () {\n  function Slide(wrapper, slide) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Slide);\n    this.wrapper = document.querySelector(wrapper); //div\n    this.slide = document.querySelector(slide); //ul com li's e img's\n    this.dist = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0\n    };\n    this.activeClass = 'active';\n    this.changeEvent = new Event('changeEvent');\n  }\n\n  //eventos que precisam de bind: callbacks\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Slide, [{\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.onStart = this.onStart.bind(this);\n      this.onMove = this.onMove.bind(this);\n      this.onEnd = this.onEnd.bind(this);\n      this.activePrevSlide = this.activePrevSlide.bind(this);\n      this.activeNextSlide = this.activeNextSlide.bind(this);\n      this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.onResize.bind(this), 200);\n    }\n\n    // método para transição, recebe true e false\n    // antes de clicar em algum slide o valor está como true (init), ao clicar e mover: false (onStart)\n    // ao soltar o mouse: true (onEnd)\n  }, {\n    key: \"transition\",\n    value: function transition(active) {\n      this.slide.style.transition = active ? 'transform .3s' : '';\n    }\n\n    //método que move o slide para o local desejado\n  }, {\n    key: \"moveSlide\",\n    value: function moveSlide(distX) {\n      this.dist.movePosition = distX; //valor do slide\n      this.slide.style.transform = \"translate3d(\".concat(distX, \"px, 0, 0)\");\n    }\n\n    //método que ajuda na mudança de slide\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition(clientX) {\n      this.dist.movement = (this.dist.startX - clientX) * 1.6; //acelera a mudança em 1.6\n      return this.dist.finalPosition - this.dist.movement;\n    }\n  }, {\n    key: \"onStart\",\n    value: function onStart(event) {\n      var moveType;\n      //para desktop\n      if (event.type === 'mousedown') {\n        event.preventDefault();\n        this.dist.startX = event.clientX;\n        moveType = 'mousemove';\n      } else {\n        //quando for touch (mobile)\n        this.dist.startX = event.changedTouches[0].clientX;\n        moveType = 'touchmove';\n      }\n      this.wrapper.addEventListener(moveType, this.onMove);\n      this.transition(false);\n    }\n  }, {\n    key: \"onMove\",\n    value: function onMove(event) {\n      //ternário para ver se é desktop ou mobile\n      var pointerPosition = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX;\n      var finalPosition = this.updatePosition(pointerPosition);\n      this.moveSlide(finalPosition);\n    }\n\n    // método após soltar o slide\n  }, {\n    key: \"onEnd\",\n    value: function onEnd(event) {\n      var moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';\n      this.wrapper.removeEventListener(moveType, this.onMove); //rem\n      this.dist.finalPosition = this.dist.movePosition;\n      this.transition(true);\n      this.changeSlideOnEnd();\n    }\n  }, {\n    key: \"changeSlideOnEnd\",\n    value: function changeSlideOnEnd() {\n      if (this.dist.movement > 120 && this.index.nextSlide !== undefined) {\n        this.activeNextSlide();\n      } else if (this.dist.movement < -120 && this.index.prevSlide !== undefined) {\n        this.activePrevSlide();\n      } else {\n        this.changedSlide(this.index.actualSlide);\n      }\n    }\n  }, {\n    key: \"addSlideEvent\",\n    value: function addSlideEvent() {\n      this.wrapper.addEventListener('mousedown', this.onStart);\n      this.wrapper.addEventListener('touchstart', this.onStart); //mobile, igual ao mousedown\n      this.wrapper.addEventListener('mouseup', this.onEnd);\n      this.wrapper.addEventListener('touchend', this.onEnd); //mobile, igual ao mouseup\n    }\n  }, {\n    key: \"calcSlidePosition\",\n    value: function calcSlidePosition(slide) {\n      //tamanho da tela total - tamanho do slide / 2, isto dá as bordas/margins do slide\n      var margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n      return -(slide.offsetLeft - margin);\n    }\n\n    // Slides Config\n  }, {\n    key: \"slidesConfig\",\n    value: function slidesConfig() {\n      var _this = this;\n      //transforma a ul em um array, contendo todas as li\n      this.slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.slide.children).map(function (element) {\n        var positionItem = _this.calcSlidePosition(element);\n        //retorna a posição de cada slide e o elemento de cada slide (li)\n        return {\n          positionItem: positionItem,\n          element: element\n        };\n      });\n    }\n  }, {\n    key: \"slidesIndexNav\",\n    value: function slidesIndexNav(index) {\n      var lastSlide = this.slideArray.length - 1;\n      this.index = {\n        prevSlide: index ? index - 1 : undefined,\n        // se for o primeiro slide[0], dará false, logo o prev será undefined\n        actualSlide: index,\n        nextSlide: index === lastSlide ? undefined : index + 1\n      };\n    }\n  }, {\n    key: \"changedSlide\",\n    value: function changedSlide(index) {\n      var activeSlide = this.slideArray[index]; //retorna o positionItem (poisção do Slide) e o slide em si (li)      \n      this.moveSlide(activeSlide.positionItem);\n      this.slidesIndexNav(index);\n      this.dist.finalPosition = activeSlide.positionItem;\n      this.changeActiveClass();\n      this.wrapper.dispatchEvent(this.changeEvent);\n    }\n\n    // Classe ativa\n  }, {\n    key: \"changeActiveClass\",\n    value: function changeActiveClass() {\n      var _this2 = this;\n      //remove a classe ativo dos slides nãoa ativos\n      this.slideArray.forEach(function (slide) {\n        slide.element.classList.remove(_this2.activeClass);\n      });\n      //adiciona classe ativo no slie ativo\n      this.slideArray[this.index.actualSlide].element.classList.add(this.activeClass);\n    }\n\n    // Resize\n  }, {\n    key: \"onResize\",\n    value: function onResize() {\n      var _this3 = this;\n      setTimeout(function () {\n        _this3.slidesConfig();\n        _this3.changedSlide(_this3.index.actualSlide);\n      }, 1000);\n    }\n  }, {\n    key: \"addResizeEvent\",\n    value: function addResizeEvent() {\n      window.addEventListener('resize', this.onResize);\n    }\n\n    // Navigation\n  }, {\n    key: \"activePrevSlide\",\n    value: function activePrevSlide() {\n      if (this.index.prevSlide !== undefined) {\n        this.changedSlide(this.index.prevSlide);\n      }\n    }\n  }, {\n    key: \"activeNextSlide\",\n    value: function activeNextSlide() {\n      if (this.index.nextSlide !== undefined) {\n        this.changedSlide(this.index.nextSlide);\n      }\n    }\n\n    // Inicializar\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.bindEvents();\n      this.addSlideEvent();\n      this.slidesConfig();\n      this.transition(true);\n      this.addResizeEvent();\n      this.changedSlide(0);\n      return this;\n    }\n  }]);\n  return Slide;\n}();\nvar SlideNav = /*#__PURE__*/function (_Slide) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(SlideNav, _Slide);\n  function SlideNav(slide, wrapper) {\n    var _this4;\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, SlideNav);\n    _this4 = _callSuper(this, SlideNav, [slide, wrapper]);\n    _this4.bindControls();\n    return _this4;\n  }\n  // Mover para frente e para trás\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SlideNav, [{\n    key: \"addArrow\",\n    value: function addArrow(prev, next) {\n      this.prevElement = document.querySelector(prev);\n      this.nextElement = document.querySelector(next);\n      this.addArrowEvent();\n    }\n  }, {\n    key: \"addArrowEvent\",\n    value: function addArrowEvent() {\n      this.prevElement.addEventListener('click', this.activePrevSlide);\n      this.nextElement.addEventListener('click', this.activeNextSlide);\n    }\n\n    // Paginação\n  }, {\n    key: \"criarControle\",\n    value: function criarControle() {\n      var control = document.createElement('ul');\n      control.dataset.control = 'slideControl';\n      this.slideArray.forEach(function (item, index) {\n        control.innerHTML += \"<li><a href=\\\"#slide\".concat(index + 1, \"\\\">\").concat(index + 1, \"</a></li>\");\n      });\n      this.wrapper.appendChild(control);\n      return control;\n    }\n  }, {\n    key: \"eventControl\",\n    value: function eventControl(item, index) {\n      var _this5 = this;\n      item.addEventListener('click', function (event) {\n        event.preventDefault();\n        _this5.changedSlide(index);\n      });\n      this.wrapper.addEventListener('changeEvent', this.activeClassControl);\n    }\n  }, {\n    key: \"addControl\",\n    value: function addControl(customControl) {\n      this.control = document.querySelector(customControl) || this.criarControle();\n      this.controlArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.control.children); //array com todas as li's do ul\n      this.controlArray.forEach(this.eventControl);\n      this.activeClassControl();\n    }\n  }, {\n    key: \"activeClassControl\",\n    value: function activeClassControl() {\n      var _this6 = this;\n      this.controlArray.forEach(function (item) {\n        return item.classList.remove(_this6.activeClass);\n      });\n      this.controlArray[this.index.actualSlide].classList.add(this.activeClass);\n    }\n  }, {\n    key: \"bindControls\",\n    value: function bindControls() {\n      this.eventControl = this.eventControl.bind(this);\n      this.activeClassControl = this.activeClassControl.bind(this);\n    }\n  }]);\n  return SlideNav;\n}(Slide);\n\n\n//# sourceURL=webpack:///./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/slides.js":
/*!******************************!*\
  !*** ./js/modules/slides.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SlidesAnimation)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar SlidesAnimation = /*#__PURE__*/function () {\n  function SlidesAnimation(radioBtnSelector, labelSelector) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, SlidesAnimation);\n    // Seleciona os inputs de rádio e as labels com base nos seletores fornecidos\n    this.radioInputs = document.querySelectorAll(radioBtnSelector);\n    this.labelElements = document.querySelectorAll(labelSelector);\n\n    // Variáveis para controle do intervalo e contador\n    this.intervalId = null;\n    this.contador = 1;\n  }\n\n  // Atualiza a classe 'checked' na label correspondente ao input de rádio selecionado\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SlidesAnimation, [{\n    key: \"updateCheckedLabel\",\n    value: function updateCheckedLabel() {\n      var _this = this;\n      this.radioInputs.forEach(function (radioInput, index) {\n        if (radioInput.checked) {\n          // Remove a classe 'checked' de todas as labels e adiciona à label correspondente\n          _this.labelElements.forEach(function (labelElement) {\n            labelElement.classList.remove('checked');\n          });\n          _this.labelElements[index].classList.add('checked');\n        }\n      });\n    }\n\n    // Avança para a próxima imagem no intervalo de tempo\n  }, {\n    key: \"nextImage\",\n    value: function nextImage() {\n      for (var i = 0; i < this.radioInputs.length; i++) {\n        if (this.radioInputs[i].checked) {\n          this.contador = i + 1;\n          break;\n        }\n      }\n      var nextIndex = this.contador % 4 + 1;\n      var radioElement = document.getElementById('radio' + nextIndex);\n      if (radioElement) {\n        radioElement.checked = true;\n        this.updateCheckedLabel();\n      }\n    }\n\n    // Inicia o intervalo de troca automática de imagens\n  }, {\n    key: \"startInterval\",\n    value: function startInterval() {\n      var _this2 = this;\n      this.intervalId = setInterval(function () {\n        _this2.nextImage();\n      }, 3000);\n    }\n\n    // Manipula o clique nos inputs de rádio para pausar e reiniciar o intervalo\n  }, {\n    key: \"handleRadioClick\",\n    value: function handleRadioClick() {\n      var _this3 = this;\n      clearInterval(this.intervalId);\n      setTimeout(function () {\n        _this3.startInterval();\n      }, 2000);\n    }\n\n    // Inicializa a classe, adicionando eventos e configurando o estado inicial\n  }, {\n    key: \"init\",\n    value: function init() {\n      var _this4 = this;\n      // Adiciona a classe 'checked' à primeira label quando a página carrega\n      var firstLabel = this.labelElements[0];\n      if (firstLabel) {\n        firstLabel.classList.add('checked');\n      }\n\n      // Adiciona listener para pausar e reiniciar o intervalo quando um input é clicado\n      this.radioInputs.forEach(function (radioInput) {\n        radioInput.addEventListener('click', function () {\n          return _this4.handleRadioClick();\n        });\n      });\n\n      // Inicia o intervalo automaticamente\n      this.startInterval();\n\n      // Adiciona listener para atualizar a label quando um input é clicado\n      this.radioInputs.forEach(function (radioInput) {\n        radioInput.addEventListener('click', function () {\n          return _this4.updateCheckedLabel();\n        });\n      });\n\n      // Adiciona event listener para atualizar a label quando a imagem muda automaticamente\n      document.addEventListener('change', function () {\n        return _this4.updateCheckedLabel();\n      });\n    }\n  }]);\n  return SlidesAnimation;\n}();\n\n\n//# sourceURL=webpack:///./js/modules/slides.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slides_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slides.js */ \"./js/modules/slides.js\");\n/* harmony import */ var _modules_photoGalleryAc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/photoGalleryAc.js */ \"./js/modules/photoGalleryAc.js\");\n/* harmony import */ var _modules_changeContentControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/changeContentControls.js */ \"./js/modules/changeContentControls.js\");\n/* harmony import */ var _modules_clickMenuHamb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clickMenuHamb.js */ \"./js/modules/clickMenuHamb.js\");\n/* harmony import */ var _modules_lazyLoading_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/lazyLoading.js */ \"./js/modules/lazyLoading.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n\n\n\n\n\nvar slidesAnimation = new _modules_slides_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('input[name=\"radio-btn\"]', '.manual-navegacao label');\nslidesAnimation.init();\n(0,_modules_photoGalleryAc_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_changeContentControls_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_clickMenuHamb_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_lazyLoading_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\ndocument.addEventListener('DOMContentLoaded', function () {\n  var header = document.querySelector('.header');\n\n  // Verifica se o elemento .header existe\n  if (header) {\n    var tamanhoElemento = header.offsetHeight;\n    var header_bg = document.querySelector('.header-bg');\n    if (header_bg) {\n      header_bg.style.height = tamanhoElemento + 'px';\n    }\n    var introducao = document.querySelector('.introducao');\n    if (introducao) {\n      introducao.style.marginTop = tamanhoElemento + 'px';\n    }\n  }\n});\n\nvar slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('.slide-wrapper', '.slide-big');\nslide.init();\nslide.addControl('.custom-control');\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n  return self;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : String(i);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

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