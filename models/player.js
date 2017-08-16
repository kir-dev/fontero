var Player = (function() {

    var module = {};

    var x;
    var y;
    var direction;
    var health;

    module.name = 'p';

    module.constructor = function (x, y, direction, health) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.health = health;
    };


    module.getX = function () {
        return this.x;
    }


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


    module.attack = function () {

    };
    return module;
})();
