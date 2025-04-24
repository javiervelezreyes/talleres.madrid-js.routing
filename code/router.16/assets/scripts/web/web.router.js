import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'
import Host      from '../helpers/helper.host.js'
import Loader    from '../helpers/helper.load.js'
import History   from '../helpers/helper.history.js'
import Path      from '../helpers/helper.path.js'


const PORT     = 'port'
const VIEW     = 'view'
const EXP      = 'exp'
const ROUTE    = 'web-route'
const LOCATION = 'location'
const ORIGIN   = 'origin'
const HTML     = 'innerHTML'

function Routes (routes) {
  return function (path) {
    for (let route of routes) {
      let { exp } = route
      let checker = Path (exp)
      let ok = checker.check (path)
      if (ok) return route
    }
  }
}

class Router extends Component {

  constructor () {
    super ()
  }

  ready () {
    let routes  = []
    let $routes = Host (this).find (ROUTE)
    for (let $route of $routes) {
      let view = $route.getAttribute (VIEW)
      let exp  = $route.getAttribute (EXP)
      routes = [...routes, { exp, view }]
    }

    let base     = window[LOCATION][ORIGIN]
    let port     = this.getAttribute (PORT)
    let $root    = this.getRootNode ()
    let $port    = $root.querySelector (port)
    let getRoute = Routes (routes)
    History.watch (async function (path) {
      let route    = getRoute (path)
      let { exp  } = route
      let { view } = route
      $port[HTML]  = await Loader (base).load (view)
      
      let self = $port.children[0]
      let ctx  = Path (exp).inspect (path)
      for (let key in ctx) {
        let value = ctx[key]
        self.setAttribute (key, value)
      }
    })
  }

}

Registry.set ('web-router', Router)