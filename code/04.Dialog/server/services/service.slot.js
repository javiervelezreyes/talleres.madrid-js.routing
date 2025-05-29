import Model   from '../model/model.js'
import Service from '../helpers/helper.service.js'

const UNSUPPORTED = 'Not supported action'
const DATA        = 'data'
const STATUS      = 'status'
const RESERVED    = 'reservado'
const FREE        = 'libre'

export default Service ({

  get ({ path }) {
    return Model.get (path)
  },

  post ({ path }) {
    let slot = Model.get (path)
    slot[DATA][STATUS] = RESERVED
    return slot
  },

  put () {
    throw Error (UNSUPPORTED)
  },

  delete ({ path }) {
    let slot = Model.get (path)
    slot[DATA][STATUS] = FREE
    return slot
  }

})