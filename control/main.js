
function parse(str) {
    eval(str);
    Display.draw(Map.map);
}

$(function () {
    loadMap(1);

    function loadMap(level) {
        $.when(
            $.get("assets/levels/level" + level + ".txt")
        ).then(function (response) {
            Player.constructor();
            Display.setPlayer = Player;
            Display.setCoins = Coins;
            Map.parseLevel(response);
            Display.draw(Map.map);
        });
    };
});

