import Server from './helpers/helper.server.js'
import Genres from './services/service.genres.js'
import Series from './services/service.series.js'
import Books  from './services/service.books.js'
import Book   from './services/service.book.js'

const GENRES = '/genres'
const SERIES = '/genre/:genre/series'
const BOOKS  = '/genre/:genre/serie/:serie/books'
const BOOK   = '/genre/:genre/serie/:serie/book/:book'

Server (3000)
  .Service (GENRES , Genres)
  .Service (SERIES , Series)
  .Service (BOOKS  , Books)
  .Service (BOOK   , Book)
.Start ()