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
    };

    module.name = 'c';
    return module;
});
