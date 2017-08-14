var Coins = (function() {
    var module = {};
    var coins = [];

    module.coins = [];

    module.getCoins = function () {
        return this.coins;
    };


    return module;
})();