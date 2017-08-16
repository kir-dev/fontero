var Enemy = (function() {
    var module = {};

    var x;
    var y;
    var direction;
    var health;

    module.name = 'e';

    module.init = function(x, y) {
        this.x = x;
        this.y = y;
    };

    module.getX = function() {
        return this.x;
    }

    module.setDirection = function(dir) {
        this.direction = dir;
    };

    module.setHealth = function(health) {
        this.health = health;
    };

    module.attack = function() {

    };

    return module;
});