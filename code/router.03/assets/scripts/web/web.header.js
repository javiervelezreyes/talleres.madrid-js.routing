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
          <div class="container">
            <div class="tabs is-boxed article-tabs">
              <ul>
                <li class="is-active"><a href="#">Artículo 1</a></li>
                <li><a href="#">Artículo 2</a></li>
                <li><a href="#">Artículo 3</a></li>
                <li><a href="#">Artículo 4</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `
  }
}

Registry.set ('web-header', Header)
