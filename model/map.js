var Map = (function() {
  var module = {};
  var map = [];
  var blocksEnum = {
    WALL : '#',
    RUBY : 'r',
    EXIT : 'e',
    WARRIOR : 'w',
    SPACE : ' ',
      NEWLINE : "\n"
  }



  module.parseLevel = function(contents) {
      var line = [];
    for(var index=0; index<contents.length; index++) {
      var char = contents.charAt(index);
      if(char==blocksEnum.NEWLINE) {
        map.push(line);
        line = [];
      }
      else
        line.push(char);
    }
  }
  module.map = map;
return module;
})();
