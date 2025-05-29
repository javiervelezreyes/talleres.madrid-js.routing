const TYPE     = 'Content-Type'
const TJSON    = 'application/json'
const SUCCESS  = 'success'
const ERROR    = 'error'
const EMESSAGE = 'Unable to proceed with action'
const SMESSAGE = 'Action successfully done.'

let asText = JSON.stringify

function Helper (response) {
    
    function send (data) {
      response.writeHead (200, { [TYPE] : TJSON })
      response.end (asText ({
        type     : SUCCESS,
        message  : SMESSAGE,
        response : data 
      }))
    }

    function error (data) {
      response.writeHead (400, { [TYPE] : TJSON })
      response.end (asText ({
        type     : ERROR,
        message  : EMESSAGE,
        response : data  
      }))
    }

    function end () {
      response.writeHead (204)
      response.end ()
    }


    return { send, error, end }

}

export default Helper