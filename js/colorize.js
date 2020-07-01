'use strict';
(function () {

  window.getRandom = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.colorize = function (element, massiv) {
    element.addEventListener('click', function () {
      var color = window.getRandom(massiv);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };
})();
