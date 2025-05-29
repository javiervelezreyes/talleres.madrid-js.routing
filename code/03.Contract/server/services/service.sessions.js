import Sessions from '../model/model.sessions.js'
import Service  from '../helpers/helper.service.js'

const UNSUPPORTED = 'Not supported action'

export default Service ({

  get ({ group }) {
    let sessions = Sessions.get (group)
    return { sessions }
  },

  post () {
    throw Error (UNSUPPORTED)
  },

  put () {
    throw Error (UNSUPPORTED)
  },

  delete () {
    throw Error (UNSUPPORTED)
  }

})