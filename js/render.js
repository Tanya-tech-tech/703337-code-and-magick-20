'use strict';
(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var renderWizard = function (wizard) {
    var wizardElement = window.util.similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = {
    renderWizards: function (wizards) {
      window.util.similarListElement.innerHTML = ' ';
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
        fragment.appendChild(renderWizard(wizards[i]));
      }
      window.util.similarListElement.appendChild(fragment);
      window.util.userDialog.querySelector('.setup-similar').classList.remove('hidden');
    },

    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: maroon;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';
      node.style.height = '150px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };

})();

