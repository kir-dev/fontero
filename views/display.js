var Display = (function () {

    var module = {};
    var imageCache = {};
    var player = {};
    var Coins = [];

    module.setPlayer = function (message) {
        player = message;
    };



    module.draw = function (map) {
        var canvas = document.getElementById('playcanvas');
        var context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.drawImage(imageCache.bg, 0, 0, canvas.width, canvas.height);


        map.forEach(function (element) {
            var img = new Image();
            switch (element.name){
                case 'p':
                    img = imageCache.player;
                    break;
                case 'r':
                    img = imageCache.ruby;
                    break;
                default:
                    break;
            }
            context.drawImage(img, translateImage(element.getX()), translateImage(4), 156, 226);
        });

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
    cacheImage('ruby', 'mummy_coin');
    cacheImage('bg', 'mummy_bg');

    return module;
})();

