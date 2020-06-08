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

var getRandom = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomName = function () {
  return getRandom(WIZARD_NAMES);
};

var getRandomSurame = function () {
  return getRandom(WIZARD_SURNAMES);
};

var getRandomColor = function () {
  return getRandom(WIZARD_COAT);
};

var getRandomEyes = function () {
  return getRandom(WIZARD_EYES);
};

var wizards = [
  {
    name: getRandomName() + ' ' + getRandomSurame(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName() + ' ' + getRandomSurame(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName() + ' ' + getRandomSurame(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomName() + ' ' + getRandomSurame(),
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
