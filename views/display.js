var Display = (function() {

  var module = {};

  var player = [];

  module.setPlayer = function (message) {
    player = message;
  }

  module.draw = function (){
    var canvas = document.getElementById('playcanvas');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.strokeStyle = "green";

    // draw vertical lines
    for (var x = 0; x <= canvas.width; x += 64) {
      context.moveTo( 0.5 + x, 0);
      context.lineTo( 0.5 + x, canvas.height);
    }

    // draw horizontal lines
    for (var y = 0; y <= canvas.height; y += 64) {
        context.moveTo( 0.5, 0.5 + y);
        context.lineTo( canvas.width, 0.5 + y);
    }

    context.stroke();

    // draw player
//    context.drawImage('', player.x, player.y);

  }
/*
  function cacheImage(name, tile) {
    var imageObj = new Image();
    imageObj.src = 'assets/images/' + tile + '.svg';
    imageObj.onload = function() {
      imageCache[name] = imageObj;
    };
  }

  cacheImage('player','mummy_character')
*/
  return module;
})();

