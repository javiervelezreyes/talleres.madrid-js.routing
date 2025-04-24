const NAVIGATE = 'navigate'
const TARGET   = 'destination'
const URI      = 'url'
const PATH     = 'pathname'

function Helper () {

  let hn

  navigation.addEventListener (NAVIGATE, function (event) {
    event.intercept({
      handler () {
        if (hn) {
          let path = new URL(event[TARGET][URI])[PATH]
          hn (path)
        }
      }
    })
  })

  function get () {
    return location[PATH].substring (1)
  }

  function set (path) {
    navigation.navigate (path)
  }

  function watch (fn) {
    hn = fn
  }

  return { get, set, watch }
}

export default Helper ()