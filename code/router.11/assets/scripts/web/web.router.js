import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'
import Host      from '../helpers/helper.host.js'
import Loader    from '../helpers/helper.load.js'
import History   from '../helpers/helper.history.js'


const TYPE     = 'link'
const KEY      = 'key'
const PORT     = 'port'
const VIEW     = 'view'
const PATH     = 'path'
const ROUTE    = 'web-route'
const LOCATION = 'location'
const ORIGIN   = 'origin'
const HTML     = 'innerHTML'
const BODY     = 'body'
const ERROR    = '/404'

function Views (routes) {
  return function (path) {
    for (let key in routes) {
      if (routes[key].path == path) {
        return routes[key].view
      }
    }
  }
}

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
      let path = $route.getAttribute (PATH)
      routes[key] = { view, path }
    }

    let base   = window[LOCATION][ORIGIN]
    let port   = this.getAttribute (PORT)
    let $root  = this.getRootNode ()
    let $port  = $root.querySelector (port)
    $root.addEventListener (TYPE, async function (event) {
      let {detail} = event
      let {key}    = detail
      let {path}   = routes[key]
      History.set (path)
    })

    let getView = Views (routes)
    let body    = document[BODY] 
    History.watch (async function (path) {
      let view = getView (path)
       view && ($port[HTML] = await Loader (base).load (view))
      !view &&  (body[HTML] = await Loader (base).load (ERROR))
    })
  }

}

Registry.set ('web-router', Router)