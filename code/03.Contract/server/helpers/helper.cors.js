const ALLOWED = '*'
const METHOD  = 'method'
const OPTIONS = 'OPTIONS'

function Helper (request, response) {

    (function inject () {
      response.setHeader('Access-Control-Allow-Origin', ALLOWED)
      response.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
      response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    })()

    function check () {
      return request[METHOD] == OPTIONS
    }

    return { check }

}

export default Helper
