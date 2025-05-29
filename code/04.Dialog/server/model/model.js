import Store from './store.js'


let keys   =  Object.keys
let Filter = x => y => y.startsWith (x)

function Model (Store) {

  function find (path) {
    return keys (Store).filter (Filter (path))
  }

  function get (path) {
    return  Store[path] 
  }

  return { find, get }

}

export default Model (Store)