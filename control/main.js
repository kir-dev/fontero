
var loop;
var level;

function parse(str) {

    var i = 0;

     loop = setInterval(function () {

        i++;

        console.log("ROUND " + i + " ------------------");


        check();
         var element = Player.checkNextField(Map.map);
        switch (element.name) {
            case 'r':
                Player.canMove = true;
                var audio = new Audio('assets/sounds/coin.mp3');
                audio.play();
                break;
            case 'e':
                console.log("yo");
                Player.canMove = false;
                element.attack();
                break;
            default:
                Player.canMove = true;
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
        Player.health = 100;
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

