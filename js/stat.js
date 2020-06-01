'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH, CLOUD_Y + GAP + 2*FONT_GAP);

  /*var playerIndex = 0;
  var playerName = 'Вы';*/

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + (TEXT_WIDTH) * i,
                             BAR_HEIGHT + (CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH) + FONT_GAP);
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + (TEXT_WIDTH) * i,
                 CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH,
                 barWidth,
                 Math.round((BAR_HEIGHT * times[i]) / maxTime)
                 );

    if (players[i]==='Вы') {
    ctx.fillText(players[i], CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + (TEXT_WIDTH) * i,
                             BAR_HEIGHT + (CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH) + FONT_GAP);
    ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    ctx.fillRect(CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + (TEXT_WIDTH) * i,
                 CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH,
                 barWidth,
                 Math.round((BAR_HEIGHT * times[i]) / maxTime)
                 );
    } else {

    }
  }

/*
  ctx.fillRect(CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH,
               CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH,
               barWidth,
               BAR_HEIGHT);
  ctx.fillText(playerName, CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + TEXT_WIDTH*playerIndex,
                           BAR_HEIGHT + (CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH) + 2*FONT_GAP);

  var playerIndex = 1;
  var playerName = 'Кекс';

  ctx.fillRect(CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + TEXT_WIDTH,
                CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH,
                barWidth,
                BAR_HEIGHT);
  ctx.fillText(playerName, CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + TEXT_WIDTH*playerIndex,
                           BAR_HEIGHT + (CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH) + 2*FONT_GAP);

  var playerIndex = 2;
  var playerName = 'Катя';

  ctx.fillRect(CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + 2*TEXT_WIDTH,
               CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH,
               barWidth,
               BAR_HEIGHT);
  ctx.fillText(playerName, CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + TEXT_WIDTH*playerIndex,
                           BAR_HEIGHT + (CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH) + 2*FONT_GAP);

  var playerIndex = 3;
  var playerName = 'Игорь';

  ctx.fillRect(CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + 3*TEXT_WIDTH,
               CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH,
               barWidth,
               BAR_HEIGHT);
  ctx.fillText(playerName, CLOUD_X + GAP + FONT_GAP + TEXT_WIDTH + TEXT_WIDTH*playerIndex,
                           BAR_HEIGHT + (CLOUD_Y + GAP + 2*FONT_GAP + TEXT_WIDTH) + 2*FONT_GAP);
*/
};

