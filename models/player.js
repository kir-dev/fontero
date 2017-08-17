var Player = (function() {

    var module = {};

    var x;
    var y;
    var direction;
    var health;
    var canMove;

    module.name = 'p';

    module.constructor = function(x, y, direction, health) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.health = health;
        this.canMove = true;
    };


    module.getX = function() {
        return this.x;
    };

    module.setDir = function(dir) {
        this.direction = dir;
    };

    module.setHealth = function(health) {
        this.health = health;
    };

    module.walk = function() {
        if(!this.canMove) {
            console.log('Nem tudsz tovább menni');
            return;
        }
        switch (this.direction) {
            case "UP":
                this.y++;
                break;
            case "DOWN":
                this.y--;
                break;
            case "LEFT":
                this.x--;
                break;
            case "RIGHT":
                this.x++;
                break;
            default:
                break;
        }

    };

    module.checkNextField = function(map) {
        var returnValue = 'empty field';
        map.forEach(function(element) {
            if (element.x === Player.getX() + 1) {
                returnValue = element.name;
            }
        });

        return returnValue;
    };

    module.feel = function() {
        var returnValue = false;
        Map.map.forEach(function(element) {
            if (element.name === 'e' && element.x === Player.getX() + 1) {
                returnValue = element.name;
            }
        });
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
        Map.map.attack(coord, 25);
    };

    return module;
})();