'use strict';
(function () {

  var setupWizardWrap = document.querySelector('.setup-wizard-wrap');
  var wizCoat = setupWizardWrap.querySelector('.wizard-coat');
  var wizEyes = setupWizardWrap.querySelector('.wizard-eyes');
  var wizFireball = document.querySelector('.setup-fireball-wrap');

  window.util.userDialog.classList.remove('hidden');

  var renderWizard = function (wizard) {
    var wizardElement = window.util.similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  window.colorize(wizCoat, window.util.WIZARD_COAT);
  window.colorize(wizFireball, window.util.WIZARD_FIREBALL);
  window.colorize(wizEyes, window.util.WIZARD_EYES);

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    window.util.similarListElement.appendChild(fragment);
    window.util.userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: maroon;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.style.height = '150px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var submitHandler = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(window.util.setupForm),
        function () {
          window.util.userDialog.classList.add('hidden');
        },
        errorHandler);

  };

  window.util.setupForm.addEventListener('submit', submitHandler);

})();

