var Map = (function() {
    var module = {};
    var map = [];
    var blocksEnum = {
        WALL: 'w',
        RUBY: 'r',
        ENEMY: 'e',
        WARRIOR: 'p',
        SPACE: 's'
    };



    module.parseLevel = function(contents) {
        var line = [];
        console.log("in parselevel ");
        for (var index = 0; index < contents.length; index++) {
            var char = contents.charAt(index);
        console.log("in parselevel loop");
            switch (char) {
                case 'p':
                    Player.constructor(index, 4, "RIGHT", 100);
                    console.log("pushing player");
                    map.push(Player);
                    break;
                case 'r':

                    var coin = Ruby();
                    coin.init(index, 0);
                    map.push(coin);
                    break;
                case 'e':

                    var enemy = Enemy();
                    enemy.init(index, 0, "LEFT");
                    enemy.setHealth(100);
                    map.push(enemy);
                    break;
                case 's':
                    break;
                default:
                    break;
            }
        }
    };

    module.attack = function (coord, dmg) {
        console.log(coord + ' ' + dmg);
        map.forEach(function(element, index) {
            if (element.x === coord) {
                element.health -= dmg;
                console.log(element.name + element.health);
                if(element.health <=0){
                    map.splice(index,1);
                }
            }
        });
    }

    module.map = map;
    return module;
})();