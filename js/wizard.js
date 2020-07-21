'use strict';
(function () {

  var setupWizardWrap = document.querySelector('.setup-wizard-wrap');
  var wizCoat = setupWizardWrap.querySelector('.wizard-coat');
  var wizEyes = setupWizardWrap.querySelector('.wizard-eyes');

  var wizard = {
    onEyesChange: undefined,
    onCoatChange: undefined
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  wizCoat.addEventListener('click', function () {
    var newColor = getRandomElement(window.util.WIZARD_COAT);
    wizCoat.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizEyes.addEventListener('click', function () {
    var newColor = getRandomElement(window.util.WIZARD_EYES);
    wizEyes.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;

})();

