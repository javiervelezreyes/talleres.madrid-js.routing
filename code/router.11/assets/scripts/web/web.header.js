import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

class Header extends Component {

  constructor () {
    super ()
  }

  render () {
    return `
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Los Molinos del Ayer
            </h1>
            <h2 class="subtitle">
              Un Espacio de Reflexión Para Pies Inquietos
            </h2>
          </div>
        </div>
        <div class="hero-foot">
           <slot>
        </div>
      </section>
    `
  }
}

Registry.set ('web-header', Header)
