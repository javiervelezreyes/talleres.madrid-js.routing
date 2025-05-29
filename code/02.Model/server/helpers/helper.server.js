import IHelper from './helper.request.js'
import OHelper from './helper.response.js'
import CHelper from './helper.cors.js'
import http    from 'http'

function Helper (port) {

  let Server
  let Services = {}

  function Service (path, service) {
    Services[path] = service
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
          let {path, service} = iHelper.find (Services)
          let request = await iHelper.get (path)
          let { action, ...data } = request
          let response = service[action](data)
          oHelper.send (response)
        } 
      }
      catch (error) {
        oHelper.error (error)
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
