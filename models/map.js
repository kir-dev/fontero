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

        for (var index = 0; index < contents.length; index++) {
            var char = contents.charAt(index);
            switch (char) {
                case 'p':
                    Player.constructor(index, 4, "RIGHT", 100);
                    map.push(Player);
                    break;
                case 'r':

                    var coin = Ruby();
                    coin.init(index, 0);
                    map.push(coin);
                    break;
                case 'g':

                    var gate = Gate();
                    gate.init(index, 0);
                    map.push(gate);
                    break;
                case 'c':

                    var chest = Chest();
                    chest.init(index, 0);
                    map.push(chest);
                    break;
                case 'e':

                    var enemy = Enemy();
                    enemy.init(index, 0, "LEFT");
                    enemy.setHealth(100);
                    map.push(enemy);
                    break;
                case 's':
                    map.push({"name":"s", "x": index, "y": 0});
                    break;
                default:
                    break;
            }
        }
    };

    module.attack = function (coord, dmg) {

        map.forEach(function(element, index) {
            if (element.x === coord) {
                element.health -= dmg;

                if(element.health <=0){
                    map.splice(index,1);
                }
            }
        });
    };

    module.map = map;
    return module;
})();