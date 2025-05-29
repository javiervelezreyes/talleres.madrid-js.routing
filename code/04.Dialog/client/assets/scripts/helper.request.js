const METHOD  = 'method'
const HEADERS = 'headers'
const BODY    = 'body'
const TYPE    = 'Content-Type'
const TJSON   = 'application/json'
const GET     = 'get'
const POST    = 'post'
const PUT     = 'put'
const DELETE  = 'delete'

let asText = JSON.stringify
let check  = x => x[METHOD] != GET.toUpperCase ()

function Helper (host) {

  async function send (action, path, data) {
    let config = {}
    config[METHOD]  = action.toUpperCase () 
    config[HEADERS] = { [TYPE]: TJSON }
    check (config) && (config[BODY] = asText (data || {}))

    let response = await fetch (host + path, config)
    let json     = await response.json()
    return json
  }

  function get  (path)       { return send (GET,    path)       }
  function post (path, data) { return send (POST,   path, data) }
  function put  (path, data) { return send (PUT,    path, data) }
  function del  (path, data) { return send (DELETE, path, data) }

  return { 
    [GET]    : get, 
    [POST]   : post, 
    [PUT]    : put, 
    [DELETE] : del
  }

}

export default Helper
