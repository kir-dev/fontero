var Player = (function() {

    var module = {};

    var x;
    var y;
    var direction;
    var health;
    var canMove;
    var canPerformAction;

    module.name = 'p';

    module.constructor = function(x, y, direction, health) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.health = health;
        this.canMove = true;
        this.canPerformAction = true;
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

    module.getHealth = function() {
        return this.health;
    };

    module.walk = function() {
        if(!this.canPerformAction){
            console.log("Egy korben csak egy akciot tudsz vegrehajtani!");
            return;
        }
        this.canPerformAction = false;
        if(!this.canMove && this.direction == "RIGHT") {
            console.log('Nem tudsz továbbmenni');
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
        var offset = 0;
        switch (this.direction) {
            case "LEFT":
                offset--;
                break;
            case "RIGHT":
                offset++;
                break;
            default:
                break;
        }
        var returnValue = 'empty field';
        map.forEach(function(element) {

                if (element.x === Player.getX() + offset) {
                    returnValue = element;
                }


        });

        return returnValue;
    };

    module.openChest = function () {
        var offset = 0;
        switch (this.direction) {
            case "LEFT":
                offset--;
                break;
            case "RIGHT":
                offset++;
                break;
            default:
                break;
        }

        this.checkNextField(Map.map).open();


    };


    module.getNext = function() {
        var offset = 0;
        switch (this.direction) {
            case "LEFT":
                offset--;
                break;
            case "RIGHT":
                offset++;
                break;
            default:
                break;
        }

        var returnValue = 's';
        Map.map.forEach(function(element) {
            if (element.x === Player.getX() + offset) {
                returnValue = element.name;
            }
        });
        return returnValue;
    };

    module.getChestDistance = function() {

        var distance = 0;
        Map.map.forEach(function(element) {
            if (element.name === "c") {
                distance = Player.x - element.x;
            }
        });
        if(Player.direction == "RIGHT"){
            distance *= -1;
        }
        return distance;

    };

    module.attack = function() {

        if(!this.canPerformAction){
            console.log("Egy korben csak egy akciot tudsz vegrehajtani!");
            return;
        }
        this.canPerformAction = false;
        var audio = new Audio('assets/sounds/sword.mp3');
        audio.play();
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
        Map.attack(coord, 25);

    };


    return module;
})();
