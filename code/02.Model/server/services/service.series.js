import Service from '../helpers/helper.service.js'
import Books   from '../model/model.books.js'

const RETRIEVE = 'RETRIEVE'

export default Service ({

  retrieve ({ genre }) {
    let series = Books.Series (genre) 
    return {
      action : RETRIEVE,
      data   : { series }
    }
  }

})