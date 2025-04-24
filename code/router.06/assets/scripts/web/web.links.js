import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'
import Host      from '../helpers/helper.host.js'
import Shadow    from '../helpers/helper.shadow.js'
import Events    from '../helpers/helper.events.js'


const REF   = 'web-link'
const KEY   = 'key'
const LABEL = 'label'
const LINK  = 'a'
const EVENT = 'click'
const TYPE  = 'link'

class Links extends Component {

  constructor () {
    super ()
  }

  render () {
    let links = Host (this).find (REF)
    return `
      <div class="container">
        <div class="tabs is-boxed article-tabs">
          <ul>
            ${links.map (function (link) {
              let key   = link.getAttribute (KEY)
              let label = link.getAttribute (LABEL)
              return `<li><a href="#" key="${key}">${label}</a></li>`
            })}
          </ul>
        </div>
      </div>
    `
  }

  ready () {
    let links = Shadow (this).find (LINK)
    links.map (function (link) {
      let key = link.getAttribute (KEY)
      link.addEventListener (EVENT, function (event) {
        Events (link).stop (event)
        Events (link).fire (TYPE, { key })
      })
    })
  }
}

Registry.set ('web-links', Links)
