const METHOD  = 'method'
const HEADERS = 'headers'
const BODY    = 'body'
const TYPE    = 'Content-Type'
const TJSON   = 'application/json'
const GET     = 'GET'
const POST    = 'POST'
const PUT     = 'PUT'
const DELETE  = 'DELETE'

let asText = JSON.stringify
let check  = x => x[METHOD] != GET

function Helper (host) {

  async function send (action, path, data) {
    let config = {}
    config[METHOD]  = action
    config[HEADERS] = { [TYPE]: TJSON }
    config[BODY]    = data && check (config) && asText (data) || undefined

    let response = await fetch (host + path, config)
    let json     = await response.json()
    return json
  }

  function get  (path)       { return send (GET,    path)       }
  function post (path, data) { return send (POST,   path, data) }
  function put  (path, data) { return send (PUT,    path, data) }
  function del  (path, data) { return send (DELETE, path, data) }

  return { get, post, put, del }

}

export default Helper
