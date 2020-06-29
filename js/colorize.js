'use strict';
(function () {
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
    })
  }
}) ();