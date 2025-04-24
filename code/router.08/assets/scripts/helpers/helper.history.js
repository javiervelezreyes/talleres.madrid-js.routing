const LOCATION = 'location'
const HASH     = 'hash'


function Helper () {

  function get () {
    return location[PATH].substring (1)
  }

  function set (path) {
    window[LOCATION][HASH] = path
  }

  return { get, set }
}

export default Helper ()
