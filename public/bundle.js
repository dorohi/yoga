/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
      scroll = __webpack_require__(/*! ./parts/scroll.js */ "./parts/scroll.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js"),
      maska = __webpack_require__(/*! ./parts/maska.js */ "./parts/maska.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
      cost = __webpack_require__(/*! ./parts/cost.js */ "./parts/cost.js");

  tabs();
  timer();
  scroll();
  modal();
  maska();
  form();
  slider();
  cost();
});

/***/ }),

/***/ "./parts/cost.js":
/*!***********************!*\
  !*** ./parts/cost.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function cost() {
  'use strict';

  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total');
  var personsSum = 0,
      daysSum = 0,
      placeKoef = place.options[place.selectedIndex].value,
      total = 0;
  totalValue.textContent = 0;
  persons.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^0-9]+/g, '');
    persons.textContent = this.value;
  });
  restDays.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^0-9]+/g, '');
    restDays.textContent = this.value;
  });
  persons.addEventListener('input', function () {
    personsSum = +this.value;
    total = daysSum * personsSum * placeKoef * 4000;

    if (restDays == '') {
      totalValue.textContent = 0;
    } else {
      animateNumbers();
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = daysSum * personsSum * placeKoef * 4000;

    if (persons == '') {
      totalValue.textContent = 0;
    } else {
      animateNumbers();
    }
  });
  place.addEventListener('change', function () {
    placeKoef = +this.options[this.selectedIndex].value;
    total = daysSum * personsSum * placeKoef * 4000;

    if (restDays == '' || persons == '') {
      totalValue.textContent = 0;
    } else {
      animateNumbers();
    }
  });

  function animateNumbers() {
    animate({
      duration: 2000,
      timing: makeEaseInOut(circ),
      draw: function draw(progress) {
        totalValue.textContent = (progress * total).toFixed();
      }
    });
  }
}

module.exports = cost;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  'use strict';

  var message = {
    loading: 'Загрузка . . .',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var forms = document.querySelectorAll('form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      this.appendChild(statusMessage);
      var formData = new FormData(this);
      statusMessage.classList.add('status');

      if (!this.classList.contains('main-form')) {
        statusMessage.classList.add('form-contact');
      }

      statusMessage.classList.remove('status');
      statusMessage.innerHTML = "<img src=\"img/ajax-loader.gif\" alt=\"loader\" style=\"margin-top: 20px;\">";

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'aplication/json charset=utf-8');
          var json = formDataToJSON(data);
          console.log(data);
          console.log(this);

          request.onreadystatechange = function () {
            if (request.status == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(json);
        });
      }

      function formDataToJSON(formData) {
        var obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        return JSON.stringify(obj);
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        statusMessage.classList.add('status');
        statusMessage.innerHTML = message.success;
      }).catch(function () {
        statusMessage.classList.add('status');
        statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  });
}

module.exports = form;

/***/ }),

/***/ "./parts/maska.js":
/*!************************!*\
  !*** ./parts/maska.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function maska() {
  'use strict';

  var phones = document.querySelectorAll('input');
  phones.forEach(function (element) {
    if (element.getAttribute('type') === 'tel') {
      element.addEventListener("focus", mask);
      element.addEventListener("input", mask);
      element.addEventListener("blur", mask);
    }
  });

  function mask(event) {
    var matrix = "+38 (0__) ___-__-__",
        curentSimvol = 0,
        onlyNumbers = matrix.replace(/\D/g, ""),
        value = this.value.replace(/\D/g, "");

    if (onlyNumbers.length >= value.length) {
      value = onlyNumbers;
    }

    this.value = matrix.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && curentSimvol < value.length) {
        return value.charAt(curentSimvol++);
      } else if (curentSimvol >= value.length) {
        return '';
      } else {
        return a;
      }
    });

    if (event.type == "blur") {
      if (this.value.length == 6) {
        this.value = "";
      }
    }
  }
}

module.exports = maska;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  'use strict';

  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.querySelectorAll('.description-btn');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
  descriptionBtn.forEach(function (element) {
    element.addEventListener('click', function () {
      overlay.style.display = 'block';

      if (!isMobile()) {
        console.log("Animations ON");

        if (isIE()) {
          console.log("isIE = ".concat(isIE(), " animations"));
          element.classList.add('more-splash');
        } else {
          overlay.classList.remove('fade');
          console.log("isMobile = ".concat(isMobile(), " and isIE = ").concat(isIE(), " - JS animations")); //Что бы не загружать код, подключил дополнительный файл с ф-циями анимации

          animate({
            duration: 3000,
            timing: makeEaseOut(bounce),
            draw: function draw(progress) {
              overlay.style.opacity = progress;
            }
          });
        }
      } else {
        overlay.classList.remove('fade');
        console.log("isMobele = ".concat(isMobile(), " Animations OFF"));
      }

      document.body.style.overflow = 'hidden';
    });
  });

  function isIE() {
    return /edge/.test(navigator.userAgent.toLowerCase()) || /Internet Explorer/.test(navigator.userAgent.toLowerCase());
  }

  function isMobile() {
    return /ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase());
  }
}

module.exports = modal;

/***/ }),

/***/ "./parts/scroll.js":
/*!*************************!*\
  !*** ./parts/scroll.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scroll() {
  'use strict';

  var nav = document.querySelectorAll('a'),
      speed = 1 / 2; // Чем меньше дробь, тем быстрее прокрутка

  nav.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var target = event.target,
          curent = window.pageYOffset,
          hash = target.href.replace(/[^#]*(.*)/, '$1'),
          top = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      console.log(curent);
      requestAnimationFrame(function step(time) {
        if (start === null) {
          start = time;
        }

        var progress = time - start,
            positions = top < 0 ? Math.max(curent - progress / speed, curent + top) : Math.min(curent + progress / speed, curent + top);
        window.scrollTo(0, positions);

        if (positions != curent + top) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      });
    });
  });
}

module.exports = scroll;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  'use strict';

  var slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  var sliderIndex = 1,
      width = slides[sliderIndex].clientWidth;
  slideShow(sliderIndex); //const body = body.style.overflowX = 'hidden';

  function slideShow(index, move) {
    if (index > slides.length) {
      sliderIndex = 1;
    }

    if (index < 1) {
      sliderIndex = slides.length;
    }

    slides.forEach(function (item) {
      item.style.display = 'none';
      item.style.marginLeft = width;
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[sliderIndex - 1].classList.remove('fade');
    slides[sliderIndex - 1].style.display = 'block';
    var img1 = slides[sliderIndex - 1].querySelector('img');
    document.body.style.overflowX = 'hidden';
    animate({
      duration: 1000,
      timing: makeEaseOut(bounce),
      draw: function draw(progress) {
        if (move > 0) {
          img1.style.marginLeft = (progress - 1) * width + "px";
        } else {
          img1.style.marginLeft = width - progress * width + "px";
        }
      }
    });
    animate({
      duration: 1500,
      timing: linear,
      draw: function draw(progress) {
        img1.style.opacity = progress;
      }
    });
    dots[sliderIndex - 1].classList.add('dot-active');
  }

  function slideMove(index) {
    slideShow(sliderIndex += index, index);
  }

  function slideCurent(index) {
    slideShow(sliderIndex = index, index);
  }

  prev.addEventListener('click', function () {
    return slideMove(-1);
  });
  next.addEventListener('click', function () {
    return slideMove(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        slideCurent(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  'use strict';

  var info = document.querySelector('.info-header'),
      tabs = document.querySelectorAll('.info-header-tab'),
      tabContent = document.querySelectorAll('.info-tabcontent');
  hideTabContent(1);

  function hideTabContent(key) {
    for (var i = key; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  function showTabContent(key) {
    if (tabContent[key].classList.contains('hide')) {
      tabContent[key].classList.remove('hide');
      tabContent[key].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] == target) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  'use strict';

  var deadLine = '2019-04-04';

  function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    t = t <= 0 ? t = 0 : t;
    var seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endTime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(update, 1000);

    function update() {
      var t = getTimeRemaining(endTime);
      hours.textContent = getNormal(t.hours);
      minutes.textContent = getNormal(t.minutes);
      seconds.textContent = getNormal(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    return '';
  }

  setClock('timer', deadLine);

  function getNormal(number) {
    return number < 10 ? '0' + number : number;
  }
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map