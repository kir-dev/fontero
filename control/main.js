
var loop;
var level;

function parse(str) {

    var i = 0;

     loop = setInterval(function () {

        i++;

        console.log("ROUND " + i + " ------------------");


        check();

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
    if (Player.getX() === 10){

        clearInterval(loop);
        level++;
        $('#console-log-text').text('');
        console.log("Victory!");
        Map.map.splice(0,Map.map.length);
        loadMap(level);
    }
    if(Player.health <= 0){
        clearInterval(loop);
        $('#console-log-text').text('');
        console.log("Defeat!");
        Map.map.splice(0,Map.map.length);
        loadMap(level);
    }
}

function victory() {

}

function loadMap(level) {
    $.when(
        $.get("assets/levels/level" + level + ".txt")
    ).then(function (response) {
        Player.constructor();
        Display.setPlayer = Player;
        console.log("in loadmap");
            Map.parseLevel(response);
        Display.draw(Map.map);
    });
};

$(function () {
   level = 1;
    loadMap(level);
});

