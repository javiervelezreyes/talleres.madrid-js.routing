const NAVIGATE = 'navigate'
const PATH     = 'pathname'


function Helper() {

  let hn

  navigation.addEventListener (NAVIGATE, function (event) {
    event.intercept({
      handler () {
        if (hn) {
          let path = get ()
          hn (path)
        }
      }
    })
  })

  function get () {
    return location[PATH].substring (1)
  }

  function set(path) {
    navigation.navigate (path)
  }

  function watch (fn) {
    hn = fn
  }

  return { get, set, watch }
}

export default Helper()