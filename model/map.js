var Map = (function() {
  var module = {};
  var map = [];
  var blocksEnum = {
    WALL : '#';
    RUBY : 'r';
    EXIT : 'e';
    WARRIOR : 'w';
    SPACE : ' ';
  }

  module.loadMap = function(level) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        parseLevel(this.responseText);
      }
    };
    xmlhttp.open("GET", "assets/levels/level" + level + ".txt", true);
    xmlhttp.send();
  };

  function parseLevel(contents) {
    for(var index=0; index<contents.length; index++) {
      var char = contents.charAt(index);
      if(char==blocksEnum.NEWLINE) {
        map.push(line.slice(0));
        line = [];
      }
      else
        line.push(char);
    }
  }

})();
