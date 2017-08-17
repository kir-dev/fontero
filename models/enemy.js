var Enemy = (function() {
    var module = {};

    var x;
    var y;
    var direction;
    var health;

    module.name = 'e';

    module.init = function(x, y, dir) {
        this.x = x;
        this.y = y;
        this.direction = dir;
    };

    module.getX = function() {
        return this.x;
    };

    module.setDirection = function(dir) {
        this.direction = dir;
    };

    module.setHealth = function(health) {
        this.health = health;
    };

    module.attack = function() {
        var coord = this.x;
        switch (this.direction) {
            case "LEFT":
                coord--;
                break;
            case "RIGHT":
                coord++;
                break;
            default:
                break;
        }
        Map.attack(coord, 20);
    };

    return module;
});