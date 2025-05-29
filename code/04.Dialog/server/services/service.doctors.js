import Model   from '../model/model.js'
import Service from '../helpers/helper.service.js'

const UNSUPPORTED = 'Not supported action'

export default Service ({

  get ({ path }) {
    return Model.get (path)
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