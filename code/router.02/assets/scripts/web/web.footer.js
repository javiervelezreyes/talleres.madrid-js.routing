import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

class Footer extends Component {

  constructor () {
    super ()
  }

  async render () {
    return `
      <footer class="footer has-background-light">
        <div class="content has-text-centered">
          <p>
            <strong>Mi Sitio Web</strong>
            &copy; 2025 Todos los derechos reservados.
          </p>
        </div>
      </footer>
    `
  }
}

Registry.set ('web-footer', Footer)