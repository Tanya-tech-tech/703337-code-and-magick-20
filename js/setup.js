'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomName = function () {
  return WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES [Math.floor(Math.random() * WIZARD_SURNAMES.length)];
};

var getRandomColor = function () {
  return WIZARD_COAT [Math.floor(Math.random() * WIZARD_COAT.length)];
};

var getRandomEyes = function () {
  return WIZARD_EYES [Math.floor(Math.random() * WIZARD_EYES.length)];
};

var wizards = [
  {
    name: getRandomName(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  }
];
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderAllWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(renderAllWizards());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
