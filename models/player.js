var Player = (function() {

    var module = {};

    var x;
    var y;
    var direction;
    var health;

    module.name = 'p';

    module.constructor = function () {
        this.x = 0;
        this.y = 4;
        this.direction = "RIGHT";
        this.health = 100;
    };

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
        switch(this.direction){
            case "UP": this.y++; break;
            case "DOWN": this.y--; break;
            case "LEFT": this.x--; break;
            case "RIGHT": this.x++; break;
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
