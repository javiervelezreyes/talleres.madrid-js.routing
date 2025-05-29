import Store from './store.js'

const GROUPS   = 'groups'
const SESSIONS = 'sessions'
const GROUP    = 'group'
const KEY      = 'key'
const ID       = 'id'

let Filter = x => y => y[GROUP] == x
let Finder = x => y => y[KEY]   == x
let Remove = x => y => y[KEY]  !== x
let Id     = _ => Math.max (0, ...Store[SESSIONS].map (x => x[ID] )) + 1
let Key    = _ => Math.max (0, ...Store[SESSIONS].map (x => x[KEY])) + 1

function Helper (Store) {

  function get (group, key) {
    let sessions = (
      !group && Store[SESSIONS] ||
       group && !key &&  Store[SESSIONS].filter (Filter (group)) ||
       group &&  key && [Store[SESSIONS].filter (Filter (group)).find (Finder (key))]
    ).map (function (session) {
      let key   = session[GROUP]
      let group = Store[GROUPS].find (Finder (key))
      return { ...session, group }
    })
    return group && key && sessions[0] || sessions
  }

  function set (session) {
    !session[ID]  && (session[ID]  = Id  ())
    !session[KEY] && (session[KEY] = Key ())
    Store[SESSIONS].push (session)
  }

  function remove (key) {
    Store[SESSIONS] = Store[SESSIONS].filter (Remove (key))
  }

  return { get, set, remove }
}

export default Helper (Store)
