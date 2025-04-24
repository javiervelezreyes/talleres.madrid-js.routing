import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

const KEY   = 'key'
const EMPTY = ''


class Post extends Component {

  constructor () {
    super ()
  }

  async render () {
    let key   = KEY
    let value = this.getAttribute (KEY) 
    return value && `<web-post key="${key}" value="${value}"></web-post>` || EMPTY
  }

  whenKey () {
    this.refresh ()
  }

}

Registry.set ('post-key', Post)
