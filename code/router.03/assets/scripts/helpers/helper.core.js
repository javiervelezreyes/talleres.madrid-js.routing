import Shadow from './helper.shadow.js'
import Render from './helper.render.js'
import Class  from './helper.class.js'

const HTML =  ''

Render.ready ()

class Component extends HTMLElement {
  constructor() {
    super ()
    this.create ()
  }

   async create () {
    await this.init ()
    await this.refresh ()
    this.ready ()
  }

  async refresh () {
    let shadow = Shadow (this)
    let html   = await this.render ()
    shadow.set (html)
  }

  async init   () {}
  async ready  () {}
  async render () { return HTML }

  static get observedAttributes () {
    return Class (this).getAttributes ()
  }

  attributeChangedCallback (key, before, after) {
    let watcher = Class (this).getWatcher (key)
    watcher && watcher ({ before, after })
  }
}

export default Component
