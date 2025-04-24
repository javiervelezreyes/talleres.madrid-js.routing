const LOCATION = 'location'
const HASH     = 'hash'
const EVENT    = 'hashchange'
const URL      = 'newURL'
const MARK     = '#'


function Helper () {

  function get () {
    return location[PATH].substring (1)
  }

  function set (path) {
    window[LOCATION][HASH] = path
  }

  function watch (fn) {
    window.addEventListener (EVENT, function (event) {
      let url  = event[URL]
      let idx  = url.indexOf (MARK) + 1
      let path = url.substring (idx)
      fn (path)
    })
  }

  return { get, set, watch }
}

export default Helper ()
