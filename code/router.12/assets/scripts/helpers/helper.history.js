const CAMEL = '-'
const SPC   = ' '
const EVENT = 'popstate'
const ADD   = 'pushState'
const SET   = 'replaceState'
const PATH  = 'pathname'

let State = _ => ({})
let Title = x => x.replaceAll (CAMEL, SPC)

function Helper () {

  function get () {
    return location[PATH].substring (1)
  }

  function set (path) {
    let state = State (path)
    let title = Title (path)
    history.pushState (state, title, path);
  }

  function watch (fn) {
    addEventListener (EVENT, function () {
      let path = get ()
      fn (path)
    })
    
    let push    = history[ADD].bind (history)
    let replace = history[SET].bind (history)

    history.pushState = function (...args) {
      let path = args[2]
      push (...args)
      fn (path)
    }
    history.replaceState = function (...args) {
      let path = args[2]
      replace (...args)
      fn (path)
    } 
  }

  return { get, set, watch }
}

export default Helper ()