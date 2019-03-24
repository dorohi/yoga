"use strict";

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