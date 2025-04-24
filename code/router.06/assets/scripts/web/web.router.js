import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

const TYPE = 'link'
const KEY  = 'key'
const PORT = 'port'

class Router extends Component {

  constructor () {
    super ()
  }

  ready () {
    let name  = this.getAttribute (KEY)
    let port  = this.getAttribute (PORT)
    let $root = this.getRootNode ()
    let $port = $root.querySelector (port)
    $root.addEventListener (TYPE, function (event) {
      let {detail} = event
      let {key}    = detail
      $port.setAttribute (name, key)
    })
  }

}

Registry.set ('web-router', Router)