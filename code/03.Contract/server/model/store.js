const GROUPS   = 'groups'
const SESSIONS = 'sessions'
const TITLE    = 'title'
const GROUP    = 'group'
const SCORE    = 'score'
const KEY      = 'key'
const ID       = 'id'

export default {

  [GROUPS] : [
    { [ID]: 0 , [KEY]: 1 , [GROUP]: 'Madrid JS'      },
    { [ID]: 1 , [KEY]: 2 , [GROUP]: 'Node JS Madrid' },
    { [ID]: 2 , [KEY]: 3 , [GROUP]: 'Vue Madrid'     },
    { [ID]: 3 , [KEY]: 4 , [GROUP]: 'Angular Madrid' },
    { [ID]: 4 , [KEY]: 5 , [GROUP]: 'Polymer Madrid' },
    { [ID]: 5 , [KEY]: 6 , [GROUP]: 'Ember Madrid'   },
  ],

  [SESSIONS] : [
    { [ID]: 0  , [KEY]: 1, [TITLE]: 'Anatomia de una Promesa'    , [GROUP]: 1, [SCORE]: 5 },
    { [ID]: 1  , [KEY]: 2, [TITLE]: 'Orientación a Objetos '     , [GROUP]: 1, [SCORE]: 4 },
    { [ID]: 2  , [KEY]: 3, [TITLE]: 'Orientación a Funciones'    , [GROUP]: 1, [SCORE]: 5 },
    { [ID]: 3  , [KEY]: 4, [TITLE]: 'Desarrollo por Protocolos'  , [GROUP]: 1, [SCORE]: 5 },
    { [ID]: 4  , [KEY]: 5, [TITLE]: 'Lenguajes de Dominio'       , [GROUP]: 1, [SCORE]: 5 },
    { [ID]: 5  , [KEY]: 1, [TITLE]: 'Estrategias de Routing'     , [GROUP]: 2, [SCORE]: 4 },
    { [ID]: 6  , [KEY]: 2, [TITLE]: 'Orientación a Servicios'    , [GROUP]: 2, [SCORE]: 5 },
    { [ID]: 7  , [KEY]: 3, [TITLE]: 'Orientación a Tareas'       , [GROUP]: 2, [SCORE]: 5 },
    { [ID]: 8  , [KEY]: 4, [TITLE]: 'Rendimiento y Oprimización' , [GROUP]: 2, [SCORE]: 4 },
    { [ID]: 9  , [KEY]: 5, [TITLE]: 'Arquitecturas Ágiles'       , [GROUP]: 2, [SCORE]: 5 },
  ]

}
