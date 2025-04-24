const JS   = '.js'
const HTML = '.html'


function Helper (base) {

  async function Import (ref) {
    let ext    = JS
    let path   = base + ref + ext
    let module = await import (path)
    let mdata  = await module.default 
    return mdata
  }

  async function Load (ref) {
    let ext      = HTML
    let path     = base + ref + ext
    let response = await fetch (path)
    let html     = await response.text ()
    return html
  }

  return { 
    import : Import,
    load   : Load 
  }
}

export default Helper
