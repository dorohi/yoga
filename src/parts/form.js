"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

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