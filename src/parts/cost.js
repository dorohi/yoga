"use strict";

require("core-js/modules/es6.regexp.replace");

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
  } //Дуга


  function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
  } //easeInOut


  function makeEaseInOut(timing) {
    return function (timeFraction) {
      if (timeFraction < 0.5) {
        return timing(2 * timeFraction) / 2;
      } else {
        return (2 - timing(2 * (1 - timeFraction))) / 2;
      }
    };
  }
}

module.exports = cost;