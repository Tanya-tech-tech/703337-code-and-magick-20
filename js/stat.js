'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BARWIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  var r = function () {
    return Math.floor(Math.random() * 100);
  };
  return 'hsl(240, ' + r() + '%, 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  var renderBar = function (colors, player) {
    ctx.fillStyle = '#000';
    ctx.fillText(player, CLOUD_X + 2 * GAP + (TEXT_WIDTH + BARWIDTH) * i, BAR_HEIGHT + (CLOUD_Y + 3 * GAP + FONT_GAP) + 4 * FONT_GAP);
    ctx.fillStyle = colors;
    ctx.fillRect(CLOUD_X + 2 * GAP + (TEXT_WIDTH + BARWIDTH) * i, BAR_HEIGHT + (CLOUD_Y + 3 * GAP + FONT_GAP) + 3 * FONT_GAP, BARWIDTH, -Math.round((BAR_HEIGHT * times[i]) / maxTime)
    );
  };

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, CLOUD_Y + 3 * GAP + FONT_GAP);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      renderBar('rgba(255, 0, 0, 1)');
    } else {
      renderBar(getRandomColor(), players[i]);
    }
  }
};

