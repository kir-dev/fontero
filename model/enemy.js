var Enemy = (function() {
    var module = {};

    var x;
    var y;
    var direction;
    var health;

    module.setDirection = function (dir) {
        this.direction = dir;
    };

    module.setHealth = function (health) {
        this.health = health;
    };

    module.attack = function () {

    };

    return module;
})();
