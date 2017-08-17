
function parse(str) {

    var i = 0;

    var loop = setInterval(function () {

        i++;

        console.log("ROUND " + i + " ------------------");

        switch (Player.checkNextField(Map.map)) {
            case 'r':
                var audio = new Audio('assets/sounds/coin.mp3');
                audio.play();
                break;
            case 'e':
                console.log("yo");
                Player.canMove = false;
                break;
            default:
                break;
        }

        eval(str);

        Display.draw(Map.map);

        if(i>25){ clearInterval(loop);}

    }, 500);

}

function check() {

}

$(function () {

    var level = 1;
    loadMap(level);

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

