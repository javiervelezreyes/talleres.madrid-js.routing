const URI    = 'url'
const METHOD = 'method'
const GET    = 'get'
const LENGTH = 'length'
const SEP    = '/'
const PARAM  = ':'
const EMPTY  = ''

function Helper (request) {

  function Action () {
    return request[METHOD].toLowerCase ()
  }

  function check (exp) {
    try {
      let url    = request[URI]
      let eParts = exp.split (SEP).filter (Boolean)
      let uParts = url.split (SEP).filter (Boolean)
          
      let ok = true
      ok = ok && (uParts[LENGTH] == eParts[LENGTH]) 
      for (let idx = 0; idx < eParts[LENGTH]; idx++) {
        let ePart = eParts[idx]
        let uPart = uParts[idx]
        ok = ok &&  (
          ePart.startsWith (PARAM) && !!uPart ||
         !ePart.startsWith (PARAM) && (ePart == uPart)
        )
      }
      return ok
    }
    catch (e) {}
  }

  function Path (exp) {

    let url    = request[URI]
    let eParts = exp.split (SEP).filter (Boolean)
    let uParts = url.split (SEP).filter (Boolean)
    
    let ctx = {}
    for (let idx = 0; idx < eParts[LENGTH]; idx++) {
      let ePart = eParts[idx]
      let uPart = uParts[idx]
      let ok    = ePart.startsWith (PARAM) && !!uPart
      if (ok) {
        let key   = ePart.substring (1)
        let value = Number (uPart)
        ctx[key]  = value
      } 
      else if (ePart !== uPart) return {}
    }
    return ctx
  }

  async function Body (action) {
    if (action == GET) return {}
    else {
      let body = EMPTY
      for await (let part of request) {
        body = body + part
      }
      return JSON.parse (body)
    }
  }

  async function get (exp) {
    let action = Action ()
    let path   = Path (exp)
    let body   = await Body (action)
    return { action, ...body, ...path }
  }

  function find (services) {
    for (let path in services) {
      let service = services[path]
      let ok      = check (path)
      if (ok) return {path, service}
    }

  }

  return { get, find }

}

export default Helper
