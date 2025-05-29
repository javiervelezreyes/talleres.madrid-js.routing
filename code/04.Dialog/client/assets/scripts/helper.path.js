const LOCATION  = 'location'
const SEARCH    = 'search'

function Helper () {

  function get (key) {
    let path = new URLSearchParams (window[LOCATION][SEARCH])
    return path.get (key) | 0
  }

  return { get }

}

export default Helper ()