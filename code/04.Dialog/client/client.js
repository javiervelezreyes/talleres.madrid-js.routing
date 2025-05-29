const HOST  = 'http://localhost:3000'
const GET    = 'GET'
const POST   = 'POST'
const PUT    = 'PUT'
const DELETE = 'DELETE'
const TYPE   = 'Content-Type'
const TJSON  = 'application/json'


let asText = JSON.stringify

async function send (action, path, data) {
  let body = action == GET ? undefined : data || {}
  let response = await fetch (HOST + path, {
    method  : action,
    headers : { [TYPE] : TJSON },
    body    : asText (body)
  })
  if (!response.ok) throw new Error (`HTTP ${response.status}: ${await response.text()}`)
  return response.json ()
}

function log (key, data) {
  console.log (key)
  console.log (JSON.stringify (data))
}

async function main() {

  try {
    // log ('ROOT'    , await send (GET , '/' ))
    // log ('DOCTORS' , await send (GET , '/doctors' ))
    // log ('DOCTOR'  , await send (GET , '/doctor/101' ))
    log ('SLOT'    , await send (GET  , '/slot/201' ))
    log ('RESERVA' , await send (POST , '/slot/201' ))
    log ('CHECK'   , await send (GET  , '/slot/201' ))
    log ('CANCELA' , await send (DELETE  , '/slot/201' ))
    log ('CHECK'   , await send (GET  , '/slot/201' ))
  }
  catch (error) {
    console.log (error)
  }

}

main()
