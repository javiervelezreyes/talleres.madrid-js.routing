const TEXT    = 'textContent'
const VALUE   = 'value'
const CONTENT = 'content'
const EMPTY   = ''

function Helper (root) {

  function create (node) {
     return node[CONTENT].cloneNode (true)
  }

  function get (exp) {
    return root.querySelector (exp)
  } 

  function find (exp) {
    return [...root.querySelectorAll (exp)]
  } 

  function getText (exp) {
    let node  = get (exp)
    let value = node[VALUE]
    return value
  }

  function getInt (exp) {
    let node  = get (exp)
    let value = node[VALUE] | 0
    return value
  }

  function set (node, text) {
    node[TEXT] = text
  }

  function clear (node) {
    set (node, EMPTY)
  }

  function insert (node) {
    root.appendChild (node)
  }

  return { 
    create,
    get, find,
    getText, getInt,
    set, clear, insert
  }

}

let helper = Helper (document)
for (let key in helper) {
  let name = key
  let fn   = helper[key].bind (helper)
  Helper[name] = fn
}

export default Helper