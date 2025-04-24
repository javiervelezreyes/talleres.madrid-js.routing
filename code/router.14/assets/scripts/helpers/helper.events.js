const ON = true


function Helper (self) {

  function fire (type, context) {
    let bubbles  = ON
    let composed = ON
    let detail   = context
    let event    = new CustomEvent (type, { detail, bubbles, composed })
    self.dispatchEvent (event)
  }
  function stop (event) {
    event.preventDefault  ()
    event.stopPropagation ()
  }

  return {
    fire,
    stop
  }

}

export default Helper