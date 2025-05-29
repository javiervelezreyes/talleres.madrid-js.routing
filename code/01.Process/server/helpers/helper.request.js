const EMPTY = ''

function Helper (request) {

    async function get () {
      let body = EMPTY
      for await (let part of request) {
        body = body + part
      }
      return JSON.parse (body)
    }

    return { get }

}

export default Helper
