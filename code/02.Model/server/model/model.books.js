import Store from './store.js'

const GENRES = 'genres'
const SERIES = 'series'
const BOOKS  = 'books'
const KEY    = 'key'
const GENRE  = 'genre'
const SERIE  = 'serie'

let GFinder = x => y => y[KEY]   == x
let GFilter = x => y => y[GENRE] == x
let GMap    = x => z => ({ ...z, [GENRE]: x })
let SFinder = (x, y) => z => z[GENRE] == x && z[KEY]   == y
let SFilter = (x, y) => z => z[GENRE] == x && z[SERIE] == y
let SMap    = (x, y) => z => ({ ...z, [SERIE]: x, [GENRE]: y })
let BFinder = x => y => y[KEY] == x

function Helper (Store) {

  function Genres () {
    return Store[GENRES]
  }

  function Series (IGenre) {
    let {genre} = Store[GENRES].find (GFinder (IGenre))
    let series  = Store[SERIES]
      .filter (GFilter (IGenre))
      .map    (GMap (genre))
    return series
  }

  function Books (IGenre, ISerie) {
    let {genre} = Store[GENRES].find (GFinder (IGenre))
    let {serie} = Store[SERIES].find (SFinder (IGenre, ISerie))
    let books   = Store[BOOKS]
      .filter (SFilter (IGenre, ISerie))
      .map    (SMap (serie, genre))
    return books
  }

  function Book (IGenre, ISerie, IBook) {
    let books = Books (IGenre, ISerie)
    let book  = books.find (BFinder (IBook))
    return book
  }

  return { Genres, Series, Books, Book }
}

export default Helper (Store)
