var Map = (function() {
  var module = {};
  var map = [];
  var blocksEnum = {
    WALL : 'w',
    RUBY : 'r',
    EXIT : 'e',
    WARRIOR : 'p',
    SPACE : 's'
  };



  module.parseLevel = function(contents) {
    var line = [];

    for(var index=0; index<contents.length; index++) {
      var char = contents.charAt(index);

      switch (char){
          case 'p':
            Player.constructor();
            map.push(Player);
            break;
          case 'r':
            Coins.coins.push({
                x: index,
                y: 4
            });
            break;
          case 'e':
            Coins.coins.push({
                x: index,
                y: 4
            });
          default: break;
      }
    }
  };

  module.map = map;
return module;
})();
