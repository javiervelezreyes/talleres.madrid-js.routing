import Server   from './helpers/helper.server.js'
import Groups   from './services/service.groups.js'
import Sessions from './services/service.sessions.js'
import Session  from './services/service.session.js'
import Score    from './services/service.score.js'


const GROUPS   = '/groups'
const SESSIONS = '/group/:group/sessions'
const SESSION  = '/group/:group/session/:session'
const SCORE    = '/group/:group/session/:session/score'

Server (3000)
  .Service (GROUPS   , Groups)
  .Service (SESSIONS , Sessions)
  .Service (SESSION  , Session)
  .Service (SCORE    , Score)
.Start ()