'use strict';
(function () {
  var URLGET = 'https://javascript.pages.academy/code-and-magick/data';
  var URLPOST = 'https://javascript.pages.academy/code-and-magick';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;
  var xhr = new XMLHttpRequest();

  var makeRequest = function (url, method, onLoad, onError, data) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = TIMEOUT_IN_MS;
    xhr.open(method, url);
    xhr.send(data);
  }

  window.backend = {
    load:function (onLoad, onError) {
    makeRequest(URLGET,'GET', onLoad, onError);
     },

    save: function (data, onLoad, onError) {
      makeRequest(URLPOST,'POST', onLoad, onError, data);
    }
  };

})();
