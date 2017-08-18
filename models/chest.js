var Chest = (function() {
    var module = {};

    var x;
    var y;


    module.init = function (x, y) {
        this.x = x;
        this.y = y;
    };

    module.getX = function () {
        return this.x;
    };
    
    module.open = function () {
        var index = Map.map.indexOf(this);
        Map.map.splice(index,1);

        var coin = Ruby();
        coin.init(index, 0);
        Map.map.push(coin);
    };

    module.name = 'c';
    return module;
});
