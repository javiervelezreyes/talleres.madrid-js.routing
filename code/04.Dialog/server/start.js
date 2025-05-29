import Server  from './helpers/helper.server.js'
import Base    from './services/service.base.js'
import Doctors from './services/service.doctors.js'
import Doctor  from './services/service.doctor.js'
import Slot    from './services/service.slot.js'
import Model   from './model/model.js'

const BASE    = Model.find ('/')
const DOCTORS = Model.find ('/doctors')
const DOCTOR  = Model.find ('/doctor')
const SLOT    = Model.find ('/slot')

Server (3000)
  .Services (BASE    , Base)
  .Services (DOCTORS , Doctors)
  .Services (DOCTOR  , Doctor)
  .Services (SLOT    , Slot)
.Start ()
