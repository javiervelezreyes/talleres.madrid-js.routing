import Store    from '../model/store.js'
import Score    from '../model/model.score.js'
import Sessions from '../model/model.sessions.js'
import Service  from '../helpers/helper.service.js'

const UNSUPPORTED = 'Not supported action'
const ID          = 'id'
const SESSIONS    = 'sessions'
const SCORE       = 'score'

export default Service ({

  get () {
    throw Error (UNSUPPORTED)
  },

  post ({ group, session, score }) {
    session = Sessions.get (group, session)
    session = Score (session).score (score)
    return { session }
  },

  put () {
    throw Error (UNSUPPORTED)
  },

  delete () {
    throw Error (UNSUPPORTED)
  }

})