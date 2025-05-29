import Store from './store.js'


const GROUPS = 'groups'
const ID     = 'id'
const KEY    = 'key'

let Finder  = x => y => y[KEY]  == x
let Remove  = x => y => y[KEY] !== x
let Id      = _ => Math.max (0, ...Store[GROUPS].map (x => x[ID] )) + 1
let Key     = _ => Math.max (0, ...Store[GROUPS].map (x => x[KEY])) + 1

function Helper (Store) {

  function get (key) {
    return (
       key && Store[GROUPS].find (Finder (key)) ||
      !key && Store[GROUPS]
    )
  }

  function set (group) {
    !group[ID]  && (group[ID]  = Id  ())
    !group[KEY] && (group[KEY] = Key ())
     Store[GROUPS].push (group)
  }

  function remove (key) {
    Store[GROUPS] = Store[GROUPS].filter (Remove (key))
  }

  return { get, set, remove }
}

export default Helper (Store)
