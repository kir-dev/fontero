var Display = (function() {

    var module = {};
    var imageCache = {};
    var player = {};



    module.setPlayer = function(message) {
        player = message;
    };

    module.draw = function(map) {
        var canvas = document.getElementById('playcanvas');
        var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.drawImage(imageCache.bg, 0, 0, canvas.width, canvas.height);


        map.forEach(function(element) {
            var img = new Image();
            switch (element.name) {
                case 'p':
                    img = imageCache.player;
                    break;
                case 'r':
                    img = imageCache.ruby;
                    break;
                case 'e':
                    img = imageCache.enemy;
                    break;
                default:
                    break;
            }
            context.drawImage(img, translateImage(element.getX()), translateImage(4), 156, 226);
        });

    };

    /* function animate(myRectangle, canvas, context, startTime) {
         // update
         var time = (new Date()).getTime() - startTime;

         var linearSpeed = 100;
         // pixels / second
         var newX = linearSpeed * time / 1000;

         if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
             myRectangle.x = newX;
         }

         // clear
         context.clearRect(0, 0, canvas.width, canvas.height);

         drawRectangle(myRectangle, context);

         // request new frame
         requestAnimFrame(function() {
             animate(myRectangle, canvas, context, startTime);
         });
     }*/


    function translateImage(coord) {
        return (coord + 0.5) * 64 - 32;
    }

    function cacheImage(name, longName) {
        var imageObj = new Image();
        imageObj.src = 'assets/images/' + longName + '.svg';
        imageObj.onload = function() {
            imageCache[name] = imageObj;
        };
    }

    cacheImage('crate', 'mummy_crate');
    cacheImage('player', 'mummy_character');
    cacheImage('enemy', 'mummy_enemy');
    cacheImage('ruby', 'mummy_coin');
    cacheImage('bg', 'mummy_bg');

    return module;
})();