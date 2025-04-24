const NAVIGATE = 'navigate'

function Helper () {

  navigation.addEventListener (NAVIGATE, function (event) {
    event.intercept ({
      handler () {}
    })
  })

  function get () {
    return location[PATH].substring (1)
  }

  function set (path) {
    navigation.navigate (path)
  }

  return { get, set }
}

export default Helper ()
