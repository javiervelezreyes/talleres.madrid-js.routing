import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'
import Host      from '../helpers/helper.host.js'
import Loader    from '../helpers/helper.load.js'


const TYPE     = 'link'
const KEY      = 'key'
const PORT     = 'port'
const VIEW     = 'view'
const ROUTE    = 'web-route'
const LOCATION = 'location'
const ORIGIN   = 'origin'
const HTML     = 'innerHTML'


class Router extends Component {

  constructor () {
    super ()
  }

  ready () {
    let routes  = {}
    let $routes = Host (this).find (ROUTE)
    for (let $route of $routes) {
      let key  = $route.getAttribute (KEY)
      let view = $route.getAttribute (VIEW)
      routes[key] = view 
    }

    let base  = window[LOCATION][ORIGIN]
    let port  = this.getAttribute (PORT)
    let $root = this.getRootNode ()
    let $port = $root.querySelector (port)
    $root.addEventListener (TYPE, async function (event) {
      let {detail} = event
      let {key}    = detail
      let view     = routes[key]
      let html     = await Loader (base).load (view) 
      $port[HTML] = html
    })
  }

}

Registry.set ('web-router', Router)