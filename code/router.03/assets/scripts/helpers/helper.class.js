const WATCH = 'when'

let proto      = x => x.prototype || Object.getPrototypeOf (x)
let keys       = x => Object.getOwnPropertyNames (proto (x))
let isProperty = x => y =>  !proto (x)[y].call
let isMethod   = x => y => !!proto (x)[y].call
let isWatcher  = x =>  x.startsWith (WATCH)
let suffix     = x =>  x.substring  (WATCH.length)
let lower      = x =>  x.toLowerCase ()

function Helper (self) {

  function getClass () {
    return proto (self)
  }

  function getConstructor () {
    return self
  }

  function getProperties () {
    return keys (self)
      .filter (isProperty (self))
  }

  function getMethod (key) {
    return proto (self)[key]
  }

  function getMethods () {
    return keys (self)
      .filter (isMethod (self))
  }

  function getWatcher (key) {
    let head = key.at (0).toUpperCase ()
    let next = key.substring (1)
    let name = head + next 
    return getMethod (WATCH + name).bind (self)
  }

  function getWatchers () {
    return keys (self)
      .filter (isMethod (self))
      .filter (isWatcher)
  }

  function getAttributes () {
    return getWatchers ()
      .map (suffix)
      .map (lower)
  }

  return {
    getClass,
    getConstructor,
    getProperties,
    getMethod,
    getMethods,
    getWatcher,
    getWatchers,
    getAttributes,
  }

}

export default Helper