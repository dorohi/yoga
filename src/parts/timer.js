"use strict";

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