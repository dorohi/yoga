"use strict";

require("core-js/modules/es6.regexp.replace");

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