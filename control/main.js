
function parse(str) {

    var i = 0;

    var loop = setInterval(function () {

        i++;

        console.log("ROUND " + i + " ------------------");

        eval(str);

        Display.draw(Map.map);

        if(i>25){ clearInterval(loop);}

    }, 500);

}

function check() {

}

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

