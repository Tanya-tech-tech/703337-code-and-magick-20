'use strict';
(function () {

  var setupWizardWrap = document.querySelector('.setup-wizard-wrap');
  var wizCoat = setupWizardWrap.querySelector('.wizard-coat');
  var wizEyes = setupWizardWrap.querySelector('.wizard-eyes');
  var wizFireball = document.querySelector('.setup-fireball-wrap');

  window.util.userDialog.classList.remove('hidden');

  var getRandomFullName = function () {
    return getRandom(window.util.WIZARD_NAMES) + ' ' + getRandom(window.util.WIZARD_SURNAMES);
  };

  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat ===window.util.coatColor) {
      rank +=2;
    }
    if (wizard.colorEyes ===window.util.eyesColor) {
      rank +=1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  window.updateWizards = function () {
    window.render.renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  var lastTimeout;

  window.wizard.onEyesChange = window.debounce(function (color) {
    window.util.eyesColor = color;
    window.updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    window.util.coatColor = color;
    window.updateWizards();
  });

  window.colorize(wizFireball, window.util.WIZARD_FIREBALL);

  var successHandler = function (data) {
    wizards = data;

    window.updateWizards();
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
  }

  window.backend.load(successHandler, errorHandler);

  var submitHandler = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(window.util.setupForm),
    function () {
      window.util.userDialog.classList.add('hidden');
    },
    window.render.errorHandler);

  };

  window.util.setupForm.addEventListener('submit', submitHandler);
})();

