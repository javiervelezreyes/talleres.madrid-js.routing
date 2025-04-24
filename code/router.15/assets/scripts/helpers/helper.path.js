const SEP = '/'
const KEY = ':'


let isEqual = (x, y) => x == y 
let isKey   = x => x.startsWith (KEY) 

function Helper (exp) {

  function check (path) {
    return !!inspect (path)
  }

  function inspect (path) {
    let eParts =  exp.split (SEP)
    let pParts = path.split (SEP)
    let mdata  = {}
    let ok     = true
    for (let i = 0; i < eParts.length; i++) {
        let ePart = eParts[i]
        let pPart = pParts[i]
        if (isKey (ePart)) {
          let key    = ePart.substring (1)
          let value  = pPart
          mdata[key] = value
        } else ok = isEqual (ePart, pPart)
    }
    if (ok) return mdata
}

  return { check, inspect }
}

export default Helper