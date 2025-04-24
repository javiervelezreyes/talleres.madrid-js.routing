function Helper () {

  function set (tag, cls) {
    customElements.define (tag, cls)
  }

  return { set }

}

export default Helper ()