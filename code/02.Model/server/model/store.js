const GENRES = 'genres'
const SERIES = 'series'
const BOOKS  = 'books'

const TITLE  = 'title'
const SERIE  = 'serie'
const GENRE  = 'genre'
const STOCK  = 'stok'
const KEY    = 'key'
const ID     = 'id'

export default {

  [GENRES] : [
    { [ID]: 0 , [KEY]: 1 , [GENRE]: 'Fantasía' },
    { [ID]: 1 , [KEY]: 2 , [GENRE]: 'Terror'   },
    { [ID]: 2 , [KEY]: 3 , [GENRE]: 'Misterio' },
  ],

  [SERIES] : [
    { [ID]: 0 , [KEY]: 1 , [SERIE]: 'Mundos Épicos'       , [GENRE]: 1 },
    { [ID]: 1 , [KEY]: 2 , [SERIE]: 'Reinos Olvidados'    , [GENRE]: 1 },
    { [ID]: 2 , [KEY]: 3 , [SERIE]: 'Magia Antigua'       , [GENRE]: 1 },
    { [ID]: 3 , [KEY]: 1 , [SERIE]: 'Horizontes Lejanos'  , [GENRE]: 2 },
    { [ID]: 4 , [KEY]: 2 , [SERIE]: 'Universos Paralelos' , [GENRE]: 2 },
    { [ID]: 5 , [KEY]: 3 , [SERIE]: 'Colonias Estelares'  , [GENRE]: 2 },
    { [ID]: 6 , [KEY]: 1 , [SERIE]: 'Casos Imposibles'    , [GENRE]: 3 },
    { [ID]: 7 , [KEY]: 2 , [SERIE]: 'Voces del Silencio'  , [GENRE]: 3 },
    { [ID]: 8 , [KEY]: 3 , [SERIE]: 'Archivos Prohibidos' , [GENRE]: 3 },
  ],

  [BOOKS] : [
    { [ID]: 0  , [KEY]: 1, [TITLE]: 'La Espada del Alba'        , [SERIE]: 1, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 1  , [KEY]: 2, [TITLE]: 'El Reino Fragmentado'      , [SERIE]: 1, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 2  , [KEY]: 3, [TITLE]: 'La Caída del Dragón'       , [SERIE]: 1, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 3  , [KEY]: 1, [TITLE]: 'El Trono de Cristal Negro' , [SERIE]: 2, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 4  , [KEY]: 2, [TITLE]: 'La Ciudad Sombría'         , [SERIE]: 2, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 5  , [KEY]: 3, [TITLE]: 'El Guardián del Valle'     , [SERIE]: 2, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 6  , [KEY]: 1, [TITLE]: 'Órbita Infinita'           , [SERIE]: 3, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 7  , [KEY]: 2, [TITLE]: 'El Último Viajero'         , [SERIE]: 3, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 8  , [KEY]: 3, [TITLE]: 'Colisión Estelar'          , [SERIE]: 3, [GENRE]: 1, [STOCK]: 10 },
    { [ID]: 9  , [KEY]: 1, [TITLE]: 'Singularidad'              , [SERIE]: 1, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 10 , [KEY]: 2, [TITLE]: 'El Otro Lado del Tiempo'   , [SERIE]: 1, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 11 , [KEY]: 3, [TITLE]: 'Fragmentos de Realidad'    , [SERIE]: 1, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 12 , [KEY]: 1, [TITLE]: 'Nueva Aurora'              , [SERIE]: 2, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 13 , [KEY]: 2, [TITLE]: 'Legado Estelar'            , [SERIE]: 2, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 14 , [KEY]: 3, [TITLE]: 'El Último Bastión'         , [SERIE]: 2, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 15 , [KEY]: 1, [TITLE]: 'El Susurro del Pasado'     , [SERIE]: 3, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 16 , [KEY]: 2, [TITLE]: 'La Casa del Eco'           , [SERIE]: 3, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 17 , [KEY]: 3, [TITLE]: 'Niebla en la Escalera'     , [SERIE]: 3, [GENRE]: 2, [STOCK]: 10 },
    { [ID]: 18 , [KEY]: 1, [TITLE]: 'La Sombra del Reloj'       , [SERIE]: 1, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 19 , [KEY]: 2, [TITLE]: 'El Cuaderno Roto'          , [SERIE]: 1, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 20 , [KEY]: 3, [TITLE]: 'Cenizas del Archivo'       , [SERIE]: 1, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 21 , [KEY]: 1, [TITLE]: 'La Llave del Olvido'       , [SERIE]: 2, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 22 , [KEY]: 2, [TITLE]: 'Código de Sombras'         , [SERIE]: 2, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 23 , [KEY]: 3, [TITLE]: 'El Testigo Silente'        , [SERIE]: 2, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 24 , [KEY]: 1, [TITLE]: 'Cien años de Soledad'      , [SERIE]: 3, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 25 , [KEY]: 2, [TITLE]: 'El Guardián de Sombras'    , [SERIE]: 3, [GENRE]: 3, [STOCK]: 10 },
    { [ID]: 26 , [KEY]: 2, [TITLE]: 'Recuerdos de Anioquía'     , [SERIE]: 3, [GENRE]: 3, [STOCK]: 10 },
  ]

}
