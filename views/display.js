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
        console.log("should draw");

        var imageObject = new Image();
        imageObject.src = 'assets/images/mummy_crate.svg';
        imageObject.height = "20px";
        imageObject.width = "20px";

        imageObject.onload = function () {
            context.drawImage(imageObject, 0, 0, 20, 20);

        };




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

    cacheImage('#', 'mummy_crate');
    cacheImage('w', 'mummy_character');
    cacheImage('e', 'mummy_enemy');
    cacheImage('r', 'mummy_coin');
    cacheImage(' ', 'mummy_bg');

    return module;
})();

