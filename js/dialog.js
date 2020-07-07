'use strict';
(function () {
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    window.util.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.util.userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  window.util.setupOpen.addEventListener('click', function () {
    openPopup();
  });

  window.util.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  window.util.setupOpen.addEventListener('focus', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  }, true);

  window.util.setupForm.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  window.util.setupClose.addEventListener('click', function () {
    closePopup();
  });

  window.util.setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  window.util.wizCoat.addEventListener('click', function () {
    window.util.wizCoat.style.fill = window.getRandom(window.util.WIZARD_COAT);
    var inputColor = document.querySelector('.setup-wizard-appearance').querySelector('input:nth-child(2)');
    inputColor.value = window.util.wizCoat.style.fill;
  });

  window.util.wizEyes.addEventListener('click', function () {
    window.util.wizEyes.style.fill = window.getRandom(window.util.WIZARD_EYES);
    var inputColor = document.querySelector('.setup-wizard-appearance').querySelector('input:nth-child(3)');
    inputColor.value = window.util.wizEyes.style.fill;
  });

  window.util.wizFireball.addEventListener('click', function () {
    window.util.wizFireball.style.backgroundColor = window.getRandom(window.util.WIZARD_FIREBALL);
    var input = window.util.wizFireball.querySelector('input');
    input.value = window.util.wizFireball.style.backgroundColor;
  });

})();
