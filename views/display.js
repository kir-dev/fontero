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

        context.fillStyle = 'red';
        context.font = '30px Arial';
        context.fillText('Health:' + Player.health, 10, 50);

        console.log(map);
        map.forEach(function(element) {
            console.log(element);
            var img = new Image();
            switch (element.name) {
                case 'p':
                    context.drawImage(imageCache.player, translateImage(element.getX()), translateImage(4), 156, 226);
                    break;
                case 'r':
                    context.drawImage(imageCache.ruby, translateImage(element.getX()), translateImage(5), 113, 113);
                    break;
                case 'e':
                    context.drawImage(imageCache.enemy, translateImage(element.getX()), translateImage(5), 156, 150);
                    break;
                default:
                    break;
            }
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