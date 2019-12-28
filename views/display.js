var Display = (function() {
  var module = {}
  var imageCache = {}
  var player = {}
  var skin
  var drawInterval

  module.setPlayer = function(message) {
    player = message
  }

  module.initMap = function(s, map) {
    clearInterval(drawInterval)
    drawInterval = undefined

    skin = s
    cacheImage('crate', 'crate')
    cacheImage('player', 'character')
    cacheImage('player_left', 'character_left')
    cacheImage('enemy', 'enemy')
    cacheImage('heart', 'heart')
    cacheImage('ruby', 'coin')
    cacheImage('bg', 'bg')
    cacheImage('bg_cloud', 'bg_cloud')
    cacheImage('bg_secondary', 'bg_secondary')
    cacheImage('bg_front', 'bg_front')
    cacheImage('gate', 'gate')
    cacheImage('chest', 'chest')

    setTimeout(function() {
      if (drawInterval === undefined)
        drawInterval = setInterval(function() {
          draw(map)
        }, 50)
    }, 500)
  }
  var dx = 2
  var x = 0

  function draw(map) {
    var canvas = document.getElementById('playcanvas')
    var context = canvas.getContext('2d')

    context.clearRect(0, 0, canvas.width, canvas.height)

    context.drawImage(imageCache.bg, 0, 0, canvas.width, canvas.height)

    // reset, start from beginning
    if (x > canvas.width) {
      x = -canvas.width + x
    }
    // draw additional image1
    if (x > 0) {
      context.drawImage(
        imageCache.bg_cloud,
        -canvas.width + x,
        0,
        canvas.width,
        canvas.height
      )
    }
    // draw additional image2
    if (x - canvas.width > 0) {
      context.drawImage(
        imageCache.bg_cloud,
        -canvas.width * 2 + x,
        0,
        canvas.width,
        canvas.height
      )
    }
    // amount to move
    x += dx

    // draw image
    context.drawImage(imageCache.bg_cloud, x, 0, canvas.width, canvas.height)

    for (var i = 1; i <= Player.health / 20; i++) {
      context.drawImage(imageCache.heart, i * 40, 10, 50, 50)
    }
    context.drawImage(
      imageCache.bg_secondary,
      0,
      0,
      canvas.width,
      canvas.height
    )

    map.forEach(function(element) {
      switch (element.name) {
        case 'p':
          if (element.direction === 'LEFT') {
            context.drawImage(
              imageCache.player_left,
              translateImage(element.getX()),
              translateImage(1),
              156,
              206
            )
          } else {
            context.drawImage(
              imageCache.player,
              translateImage(element.getX()),
              translateImage(1),
              156,
              206
            )
          }
          break
        case 'r':
          context.drawImage(
            imageCache.ruby,
            translateImage(element.getX()),
            translateImage(1.5),
            64,
            64
          )
          break
        case 'e':
          context.drawImage(
            imageCache.enemy,
            translateImage(element.getX()),
            translateImage(1),
            206,
            200
          )
          break
        case 'g':
          context.drawImage(
            imageCache.gate,
            translateImage(element.getX()),
            translateImage(1),
            206,
            200
          )
          break
        case 'c':
          context.drawImage(
            imageCache.chest,
            translateImage(element.getX()),
            translateImage(1),
            206,
            200
          )
          break
        default:
          break
      }
    })

    context.drawImage(imageCache.bg_front, 0, 0, canvas.width, canvas.height)
  }

  function translateImage(coord) {
    return coord * 92
  }

  function cacheImage(name, longName) {
    var imageObj = new Image()
    imageObj.src = 'assets/images/' + skin + '/' + longName + '.svg'
    imageObj.onload = function() {
      imageCache[name] = imageObj
    }
  }

  return module
})()
