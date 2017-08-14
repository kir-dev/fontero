

$(function () {
    loadMap(1);
    function loadMap(level) {
        $.when(
            $.get("assets/levels/level" + level + ".txt")
        ).then(function (response) {
            Player.constructor();
            Display.setPlayer = Player;
            Map.parseLevel(response);
            Display.draw(Map.map);
        });
    };
});

