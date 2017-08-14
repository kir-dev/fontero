var Player = require('../model/player.js');
var Map = require('../model/map.js');


function parse() {
    var code = document.getElementById("code").value;
    eval(code);
}

/* Itt lesz beolvasva a palya */

/* itt lesz egy eval */
/*var parse = function (input) {
    //biztonsagi kod - pl. window
    while(!win){
        eval(input);
        Map.refresh();
    }
};*/
/*  */