import IHelper from './helper.request.js'
import OHelper from './helper.response.js'
import CHelper from './helper.cors.js'
import http    from 'http'

function Helper (port) {

  let server
  let services = {}

  function Service (path, service) {
    Services[path] = service
    return this
  }

  function Services (paths, service) {
    for (let path of paths) {
      Service (path, service)
    }
    return this
  }

  function Start () {
    server = http.createServer (async function (request, response) {
      let iHelper = IHelper (request)
      let oHelper = OHelper (response)
      let Cors    = CHelper (request, response)
      try {
        if (Cors.check ()) oHelper.end ()
        else {
          let {path, service} = iHelper.find (Services)
          let request = await iHelper.get (path)
          let { action, ...data } = request
          let response = service[action]({ ...data, path })
          oHelper.send (response)
        } 
      }
      catch (error) {
        oHelper.error (error)
      }
    })
    server.listen (port)
  }

  function Stop () {
    server && server.close ()
  }

  return {
    Service,
    Services,
    Start,
    Stop
  }

}

export default Helper
