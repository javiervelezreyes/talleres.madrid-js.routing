import Groups  from '../model/model.groups.js'
import Service from '../helpers/helper.service.js'

const UNSUPPORTED = 'Not supported action'

export default Service ({

  get () {
    let groups = Groups.get ()
    return { groups }
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