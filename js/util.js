'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userDialog = document.querySelector('.setup');

  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = userDialog.querySelector('.setup-close');
  var setupForm = userDialog.querySelector('.setup-wizard-form');
  var setupWizardWrap = document.querySelector('.setup-wizard-wrap');
  var wizCoat = setupWizardWrap.querySelector('.wizard-coat');
  var wizEyes = setupWizardWrap.querySelector('.wizard-eyes');
  var wizFireball = document.querySelector('.setup-fireball-wrap');

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  window.util = {
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT: WIZARD_COAT,
    WIZARD_EYES: WIZARD_EYES,
    WIZARD_FIREBALL: WIZARD_FIREBALL,
    userDialog: userDialog,
    setupOpen: setupOpen,
    setupClose: setupClose,
    setupForm: setupForm,
    setupWizardWrap: setupWizardWrap,
    wizCoat: wizCoat,
    wizEyes: wizEyes,
    wizFireball: wizFireball,
    similarListElement: similarListElement,
    similarWizardTemplate: similarWizardTemplate,
    coatColor: coatColor,
    eyesColor: eyesColor,
  };

})();

