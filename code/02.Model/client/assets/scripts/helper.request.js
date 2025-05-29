const METHOD  = 'method'
const HEADERS = 'headers'
const BODY    = 'body'
const POST    = 'POST'
const TYPE    = 'Content-Type'
const TJSON   = 'application/json'

let asText = JSON.stringify

function Helper (host) {

  async function send (path, request) {
    let response = await fetch (host + path, {
      [METHOD]  : POST,
      [HEADERS] : { [TYPE] : TJSON },
      [BODY]    : asText (request)
    })
    return await response.json ()
  } 

  return { send }

}

export default Helper