var Display = (function () {

    var module = {};
    var imageCache = {};
    var player = [];

    module.setPlayer = function (message) {
        player = message;
    };


    module.draw = function (map) {
        var canvas = document.getElementById('playcanvas');
        var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

       /* for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {

            }
        }*/
        context.drawImage(imageCache.bg, 0, 0, canvas.width, canvas.height);
        context.drawImage(imageCache.player, translateImage(Player.x), translateImage(Player.y), 164, 226);
        console.log(Player.x);


    };

    function translateImage(coord) {
        return (coord + 0.5) * 64 - 32;
    }

    function cacheImage(name, longName) {
        var imageObj = new Image();
        imageObj.src = 'assets/images/' + longName + '.svg';
        imageObj.onload = function () {
            imageCache[name] = imageObj;
        };
    }

    cacheImage('crate', 'mummy_crate');
    cacheImage('player', 'mummy_character');
    cacheImage('e', 'mummy_enemy');
    cacheImage('r', 'mummy_coin');
    cacheImage('bg', 'mummy_bg');

    return module;
})();

