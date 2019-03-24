"use strict";

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
  } //Линейная


  function linear(timeFraction) {
    return timeFraction;
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

module.exports = slider;