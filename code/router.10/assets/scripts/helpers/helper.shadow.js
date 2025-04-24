const MODE = 'open'


function Helper (self) {

  let host   = self
  let shadow = host.shadowRoot || host.attachShadow ({ mode: MODE })

  function get (exp) {
    return (
      !exp && shadow ||
       exp && shadow.querySelector (exp)
    )
  }

  function find (exp) {
    return (
      !exp && shadow ||
       exp && [...shadow.querySelectorAll (exp)]
    )
  }

  function set (html) {
    shadow.innerHTML = Prefix () + html
  }

  function Prefix () {
    return `
      <style>
          @import url('https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css');
          @import url('./assets/styles/style.css');
      </style>
    `
  }

  return { get, set, find }

}

export default Helper