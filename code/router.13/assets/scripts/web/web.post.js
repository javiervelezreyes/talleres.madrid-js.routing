import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'
import Loader    from '../helpers/helper.load.js'

const BASE = '/posts/'
const REF  = 'ref'

class Post extends Component {

  constructor () {
    super ()
  }

  async render () {
    let ref   = this.getAttribute (REF)
    let mdata = await Loader (BASE).import (ref)

    let {author} = mdata
    let {date}   = mdata
    let {user}   = mdata
    let {image}  = mdata
    let {title}  = mdata
    let {text}   = mdata
    let {tags}   = mdata

    return `
      <div class="site-content">
        <section class="section">
          <div class="container">
            <div class="card article-card">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img src="./assets/images/${image}" alt="Imagen del artículo">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="./assets/images/${user}" alt="Avatar del autor" class="is-rounded">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${title}</p>
                    <p class="subtitle is-6">Por ${author} • ${date}</p>
                  </div>
                </div>
                <div class="content article-content">
                  ${text}
                  <div class="tags mt-5">
                  ${tags.map (function (tag) {
                    return `<span class="tag is-info"> ${tag} </span>`
                  })}
                  </div>
                  <time datetime="2025-04-15">Publicado el ${date}</time>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  `
  }

  whenRef () {
    this.refresh ()
  }

}

Registry.set ('web-post', Post)
