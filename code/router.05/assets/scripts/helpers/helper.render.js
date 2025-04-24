function Helper () {

  function ready () {
    Array.prototype.toString = function () {
      return this.join(' ')
    }
  }

  return { ready }

}

export default Helper ()