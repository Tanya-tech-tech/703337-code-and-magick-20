'use strict';
(function () {

  var setupWizardWrap = document.querySelector('.setup-wizard-wrap');
  var wizCoat = setupWizardWrap.querySelector('.wizard-coat');
  var wizEyes = setupWizardWrap.querySelector('.wizard-eyes');
  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  var wizard = {
  onEyesChange: function (color) {},
  onCoatChange: function (color) {}
}

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

wizCoat.addEventListener('click', function () {
  var newColor = getRandomElement(window.util.WIZARD_COAT);
  this.style.fill = newColor;
  wizard.onCoatChange(newColor);
});

wizEyes.addEventListener('click', function () {
  var newColor = getRandomElement(window.util.WIZARD_EYES);
  this.style.fill = newColor;
  wizard.onEyesChange(newColor);
});

return window.wizard = wizard;

})();

