var Player = require('../model/player.js');
var Map = require('../model/map.js');

/* Itt lesz beolvasva a palya */

/* itt lesz egy eval */
var parse = function (input) {
    //biztonsagi kod - pl. window
    while(!win){
        eval(input);
        Map.refresh();
    }
};
/*  */