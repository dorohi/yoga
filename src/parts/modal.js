"use strict";

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

  function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function anime(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;

      if (timeFraction > 1) {
        timeFraction = 1;
      } // текущее состояние анимации


      var progress = options.timing(timeFraction);
      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(anime);
      }
    });
  } //Отскок bounce


  function bounce(timeFraction) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
      }
    }
  } // преобразователь в easeOut


  function makeEaseOut(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    };
  }
}

module.exports = modal;