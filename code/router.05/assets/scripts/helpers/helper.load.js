const EXT = '.js'


function Helper (base) {

  async function Import (ref) {
    let ext    = EXT
    let path   = base + ref + ext
    let module = await import (path)
    let mdata  = await module.default 
    return mdata
  }

  return { import : Import }
}

export default Helper
