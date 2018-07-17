var Display = (function() {

    var module = {};
    var imageCache = {};
    var player = {};
    var skin;

    module.setPlayer = function(message) {
        player = message;
    };

    module.initMap = function(s, map) {
        skin = s;
        cacheImage('crate', 'crate');
        cacheImage('player', 'character');
        cacheImage('player_left', 'character_left');
        cacheImage('enemy', 'enemy');
        cacheImage('heart', 'heart');
        cacheImage('ruby', 'coin');
        cacheImage('bg', 'bg');
        cacheImage('gate', 'gate');
        cacheImage('chest', 'chest');
        $('#myBar').animate({
            width: "100%"
        }, 1010).animate({ height: "0px" }, 50 );
        setTimeout(function (){
            draw(map)
        }, 1000);

    };
    function draw(map) {
        var canvas = document.getElementById('playcanvas');
        var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.drawImage(imageCache.bg, 0, 0, canvas.width, canvas.height);

        for ( var i = 1; i <= Player.health / 20; i++){
            context.drawImage(imageCache.heart, (i*40), 10, 50, 50);
        }

        map.forEach(function(element) {
            var img = new Image();
            switch (element.name) {
                case 'p':
                    if(element.direction === "LEFT"){
                        context.drawImage(imageCache.player_left, translateImage(element.getX()), translateImage(1), 156, 206);
                    }
                    else{
                        context.drawImage(imageCache.player, translateImage(element.getX()), translateImage(1), 156, 206);
                    }
                    break;
                case 'r':
                    context.drawImage(imageCache.ruby, translateImage(element.getX()), translateImage(1.5), 64, 64);
                    break;
                case 'e':
                    context.drawImage(imageCache.enemy, translateImage(element.getX()), translateImage(1), 206, 200);
                    break;
                case 'g':
                    context.drawImage(imageCache.gate, translateImage(element.getX()), translateImage(1), 206, 200);
                    break;
                case 'c':
                    context.drawImage(imageCache.chest  , translateImage(element.getX()), translateImage(1), 206, 200);
                    break;
                default:
                    break;
            }
        });

    }

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
        return (coord) * 128;
    }

    function cacheImage(name, longName) {
        var imageObj = new Image();
        imageObj.src = 'assets/images/' + skin + '/' + longName + '.svg';
        imageObj.onload = function() {
            imageCache[name] = imageObj;
        };
    }

    return module;
})();