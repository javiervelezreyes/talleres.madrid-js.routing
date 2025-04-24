import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

class Port extends Component {

  constructor () {
    super ()
  }

  render () {
    return `
      <div>
        <slot>
      </div>
    `
  }
}

Registry.set ('web-port', Port)