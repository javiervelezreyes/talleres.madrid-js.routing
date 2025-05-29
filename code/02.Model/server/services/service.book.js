import Service from '../helpers/helper.service.js'
import Books   from '../model/model.books.js'
import Book    from '../model/model.book.js'

const RETRIEVE = 'RETRIEVE'
const PURCHASE = 'PURCHASE'
const REFUND   = 'REFUND'

export default Service ({

  retrieve ({ genre, serie, book }) {
    book = Books.Book (genre, serie, book) 
    return {
      action : RETRIEVE,
      data   : { book }
    }
  },

  purchase ({ genre, serie, book }) {
    book = Books.Book (genre, serie, book)
    Book (book).Purchase ()
    return {
      action : PURCHASE
    }
  },

  refund ({ genre, serie, book }) {
    book = Books.Book (genre, serie, book)
    Book (book).Refund ()
    return {
      action : REFUND
    }
  }

})