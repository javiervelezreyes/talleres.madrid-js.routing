import Service from '../helpers/helper.service.js'
import Books   from '../model/model.books.js'

const RETRIEVE = 'RETRIEVE'

export default Service ({

  retrieve () {
    let genres = Books.Genres ()
    return {
      action : RETRIEVE,
      data   : { genres }
    }
  }

})