import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

class Post extends Component {

  constructor () {
    super ()
  }

  render () {
    return `
      <div class="site-content">
        <section class="section">
          <div class="container">
            <div class="card article-card">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="./assets/images/image.01.jpg" alt="Imagen del artículo">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="./assets/images/user.01.jpg" alt="Avatar del autor" class="is-rounded">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Cómo Cuidar un Tulipán</p>
                    <p class="subtitle is-6">Por María Pérez • 15 Abril, 2025</p>
                  </div>
                </div>
                <div class="content article-content">
                  <p>
                    La tecnología web ha evolucionado enormemente en las últimas décadas. Desde los inicios de HTML estático hasta las complejas aplicaciones 
                    web que vemos hoy en día, el camino ha estado lleno de innovaciones y avances significativos. Actualmente, frameworks como Bulma CSS, que 
                    estamos utilizando en esta página, permiten crear interfaces elegantes y responsivas con mucha facilidad. La combinación de HTML5, CSS3 y 
                    JavaScript moderno ha transformado completamente lo que es posible crear en un navegador.
                  </p>
                  <p>
                    La tecnología web ha evolucionado enormemente en las últimas décadas. Desde los inicios de HTML estático hasta las complejas aplicaciones 
                    web que vemos hoy en día, el camino ha estado lleno de innovaciones y avances significativos. Actualmente, frameworks como Bulma CSS, que 
                    estamos utilizando en esta página, permiten crear interfaces elegantes y responsivas con mucha facilidad. La combinación de HTML5, CSS3 y 
                    JavaScript moderno ha transformado completamente lo que es posible crear en un navegador.
                  </p>
                  <p>
                    La tecnología web ha evolucionado enormemente en las últimas décadas. Desde los inicios de HTML estático hasta las complejas aplicaciones 
                    web que vemos hoy en día, el camino ha estado lleno de innovaciones y avances significativos. Actualmente, frameworks como Bulma CSS, que 
                    estamos utilizando en esta página, permiten crear interfaces elegantes y responsivas con mucha facilidad. La combinación de HTML5, CSS3 y 
                    JavaScript moderno ha transformado completamente lo que es posible crear en un navegador.
                  </p>
                  <p>
                    La tecnología web ha evolucionado enormemente en las últimas décadas. Desde los inicios de HTML estático hasta las complejas aplicaciones 
                    web que vemos hoy en día, el camino ha estado lleno de innovaciones y avances significativos. Actualmente, frameworks como Bulma CSS, que 
                    estamos utilizando en esta página, permiten crear interfaces elegantes y responsivas con mucha facilidad. La combinación de HTML5, CSS3 y 
                    JavaScript moderno ha transformado completamente lo que es posible crear en un navegador.
                  </p>
                  <div class="tags mt-5">
                    <span class="tag is-info">Web</span>
                    <span class="tag is-info">Tecnología</span>
                    <span class="tag is-info">Desarrollo</span>
                    <span class="tag is-info">JavaScript</span>
                  </div>
                  <time datetime="2025-04-15">Publicado el 15 de Abril de 2025</time>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  `
  }
}

Registry.set ('web-post', Post)
