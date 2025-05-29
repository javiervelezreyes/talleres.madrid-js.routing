import Store from './store.js'

const ID       = 'id'
const SESSIONS = 'sessions'
const SCORE    = 'score'

let Finder = x => y => y[ID] == x

function Helper (session) {

  function score (score) {
    let Id    = session[ID]
    let Index = Store[SESSIONS].findIndex (Finder (Id))
    session[SCORE]         = session[SCORE] + score
    Store[SESSIONS][Index] = session
    return session
  }

  return { score }
}

export default Helper
gi