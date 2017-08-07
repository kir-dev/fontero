var Player = (function() {

    var module = {};

    var x;
    var y;
    var direction;
    var health;

    module.setX = function (x) {
        this.x = x;
    };

    module.setY = function (y) {
        this.y = y;
    };

    module.setDir = function (dir) {
        this.direction = dir;
    };

    module.setHealth = function (health) {
        this.health = health;
    };

    module.walk = function () {
        switch(direction){
            case "UP": y++;break;
            case "DOWN": y--;break;
            case "LEFT": x--;break;
            case "RIGHT": x++; break;
            default: break;
        }

    };

    module.setDirection = function (dir) {
        direction = dir;
    };

    module.attack = function () {

    };
    return module;
})();
