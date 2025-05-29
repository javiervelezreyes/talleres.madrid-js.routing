import IHelper from '../helpers/helper.request.js'
import OHelper from '../helpers/helper.response.js'
import CHelper from '../helpers/helper.cors.js'
import http    from 'http'

function Helper (port) {

  let Server
  let Services = {}

  function Service (service) {
    Services = { ...Services, ...service }
    return this
  }

  function Start () {
    Server = http.createServer (async function (request, response) {
      let iHelper = IHelper (request)
      let oHelper = OHelper (response)
      let Cors    = CHelper (request, response)
      try {
        if (Cors.check ()) oHelper.end ()
        else {
          let request = await iHelper.get ()
          let { action } = request
          let { data   } = request
          let response   = Services[action](data)
          oHelper.send (response)
        } 
      }
      catch (error) {
        oHelper.error ()
      }
    })
    Server.listen (port)
  }

  function Stop () {
    Server && Server.close ()
  }

  return {
    Service,
    Start,
    Stop
  }

}

export default Helper
