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
    log ('GROUPS'   , await send (GET , '/groups' ))
    log ('SESSIONS' , await send (GET , '/group/2/sessions' ))
  }
  catch (error) {
    console.log (error)
  }
  




  // let series   = await send ('/genre/1/series'        )
  // let books    = await send ('/genre/1/serie/1/books' )
  // let book     = await send ('/genre/1/serie/1/book/1')
  // let purchase = await send ('/genre/1/serie/1/book/1')
  // let refund   = await send ('/genre/1/serie/1/book/1')


  //log ('GROUPS'   , groups)
  // log ('SERIES'   , series)
  // log ('BOOKS'    , books)
  // log ('BOOK'     , book)
  // log ('PURCHASE' , purchase)
  // log ('REFUND'   , refund)

}

main()
