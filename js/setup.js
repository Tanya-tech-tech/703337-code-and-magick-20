'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');

var setupOpen = document.querySelector('.setup-open-icon');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupForm = setup.querySelector('.setup-wizard-form');
var setupWizardWrap = document.querySelector('.setup-wizard-wrap');
var wizCoat = setupWizardWrap.querySelector('.wizard-coat');
var wizEyes = setupWizardWrap.querySelector('.wizard-eyes');
var wizFireball = document.querySelector('.setup-fireball-wrap');

userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandom = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomFullName = function () {
  return getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES);
};

var getRandomColor = function () {
  return getRandom(WIZARD_COAT);
};

var getRandomEyes = function () {
  return getRandom(WIZARD_EYES);
};

var wizards = [
  {
    name: getRandomFullName(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomFullName(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomFullName(),
    coatColor: getRandomColor(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomFullName(),
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

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupForm.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

wizCoat.addEventListener('click', function () {
  wizCoat.style.fill = getRandomColor();
  var inputColor = document.querySelector('.setup-wizard-appearance').querySelector('input:nth-child(2)');
  inputColor.value = wizCoat.style.fill;
});

wizEyes.addEventListener('click', function () {
  wizEyes.style.fill = getRandomEyes();
  var inputColor = document.querySelector('.setup-wizard-appearance').querySelector('input:nth-child(3)');
  inputColor.value = wizEyes.style.fill;
});

wizFireball.addEventListener('click', function () {
  wizFireball.style.backgroundColor = getRandom(WIZARD_FIREBALL);
  var z = wizFireball.style.backgroundColor;
  var input = wizFireball.querySelector('input');
  input.value = z;
});
