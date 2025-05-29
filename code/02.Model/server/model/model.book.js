import Store from './store.js'

const BOOKS = 'books'
const STOCK = 'stock'
const ID    = 'id'

function Model (Book) {

  function Purchase () {
    let id = Book[ID]
    Store[BOOKS][id][STOCK]--
  }

  function Refund () {
    let id = Book[ID]
    Store[BOOKS][id][STOCK]++
  }

  return { 
    Purchase,
    Refund
  }

}

export default Model
