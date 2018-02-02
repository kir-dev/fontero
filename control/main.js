
var loop;
var level;
var viktoria;
var skin;

function parse(str) {
    restart();
    var i = 0;


     loop = setInterval(function () {
         Player.canPerformAction = true;


        i++;
        console.log("ROUND " + i + " ------------------");

        check();

        var element = Player.checkNextField(Map.map);

        switch (element.name) {
            case 'r':
                if(Player.health < 100){
                    Player.health += 20;
                }
                Player.canMove = true;
                var audio = new Audio('assets/sounds/coin.mp3');
                audio.play();
                Map.map.splice(Map.map.indexOf(element), 1);
                break;
            case 'e':
                Player.canMove = false;
                element.attack();
                break;
            case 'c':
                Player.canMove = false;

                break;
            case 's':
                Player.canMove = true;
                if(Player.health < 100){
                    Player.health += 20;
                }
                break;
            case 'g':
                viktoria = true;
                break;
            default:
                if(Player.health < 100){
                    Player.health += 20;
                }
                Player.canMove = true;
                break;
        }

        eval(str);

        Display.initMap(skin, Map.map);


        if(i>25){ clearInterval(loop);}

    }, 500);

}

function check() {
    if (viktoria){
        var win = true;
        Map.map.forEach(function (element){
           if(element.name == 'r' || element.name == 'c'){
               win = false;
           }
        });
        if(win){
            clearInterval(loop);
            level++;
            if(Math.random()>0.5){
                var audio = new Audio('assets/sounds/ugyi.mp3');
            } else {
                var audio = new Audio('assets/sounds/jovagy.mp3');
            }
            audio.play();

            $('#console-log-text').text('');
            console.log("Nyertél!");
            Player.health = 100;
            Map.map.splice(0,Map.map.length);
            loadMap(level);
        } else {
            console.log('Vedd fel az összes coint!');
        }
    }
    if(Player.health <= 0){
        restart();
        console.log("Defeat!");
        var audio = new Audio('assets/sounds/fatality.mp3');
        audio.play();
    }
}
function restart() {
    clearInterval(loop);
    $('#console-log-text').text('');
    Map.map.splice(0,Map.map.length);
    loadMap(skin);
}
function loadMap(skin) {
    $.when(
        $.get("assets/levels/" + level + "/hint.txt")
    ).then(function (response) {
        $('#hint').html(response);
    });
    $.when(
        $.get("assets/levels/" + level + "/level.txt")
    ).then(function (response) {
        viktoria = false;
        Player.constructor();
        Display.setPlayer = Player;
        Map.parseLevel(response);
        Display.initMap(skin, Map.map);
    });
}

function changeLevel() {
    var levelPopup = prompt("Enter level", "");

    if ( levelPopup != null && level != levelPopup) {
        $.get("assets/levels/" + levelPopup + "/level.txt", function() {
            window.history.pushState(null, null, '?level=' + levelPopup + '&skin=' + getParameterByName('skin'));
            level = levelPopup;
            restart();
        })
        .fail(function() {
            alert("There is no level: " + levelPopup );
        })
    }
}

function showPopup() {
    $.when(
        $.get("assets/levels/" + level + "/popup.txt")
    ).then(function (response) {
        $('#hint-text').html(response);
    });
}

$(function () {
    level = getParameterByName('level');
    skin = getParameterByName('skin');
    loadMap(skin);
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
