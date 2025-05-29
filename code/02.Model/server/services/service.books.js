import Service from '../helpers/helper.service.js'
import Books   from '../model/model.books.js'

const RETRIEVE = 'RETRIEVE'

export default Service ({

  retrieve ({ genre, serie }) {
    let books = Books.Books (genre, serie) 
    return {
      action : RETRIEVE,
      data   : { books }
    }
  }

})