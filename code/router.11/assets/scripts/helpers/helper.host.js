function Helper (self) {

  let host = self

  function get (exp) {
    return (
      !exp && host ||
       exp && host.querySelector (exp)
    )
  }

  function find (exp) {
    return (
      !exp && host ||
       exp && [...host.querySelectorAll (exp)]
    )
  }

  return { get, find }

}

export default Helper