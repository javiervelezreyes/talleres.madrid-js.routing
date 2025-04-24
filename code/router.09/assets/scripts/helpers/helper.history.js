const CAMEL = '-'
const SPC   = ' '

let State = _ => ({})
let Title = x => x.replaceAll (CAMEL, SPC)

function Helper () {

  function get () {
    return location[PATH].substring (1)
  }

  function set (path) {
    let state = State (path)
    let title = Title (path)
    history.pushState (state, title, path)
  }

  return { get, set }
}

export default Helper ()
