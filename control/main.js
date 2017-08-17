
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
                Map.map.splice(Map.map.indexOf(element), 1);
                break;
            case 'e':
                Player.canMove = false;
                element.attack();
                break;
            case 's':
                Player.canMove = true;
                if(Player.health < 100){
                    Player.health += 1;
                }
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
        Map.map.forEach(function (element){
           if(element.name == 'r'){
               return false;
           }
        });
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
        Map.parseLevel(response);
        Display.draw(Map.map);
    });
};

$(function () {
   level = 1;
   loadMap(level);
});

