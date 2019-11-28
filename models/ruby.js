var Ruby = function() {
  var module = {}

  var x
  var y

  module.init = function(x, y) {
    this.x = x
    this.y = y
  }

  module.getX = function() {
    return this.x
  }

  module.name = 'r'
  return module
}
