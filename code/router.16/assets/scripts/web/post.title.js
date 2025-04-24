import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

const KEY   = 'title'
const EMPTY = ''

class Post extends Component {

  constructor () {
    super ()
  }

  async render () {
    let value = this.getAttribute (KEY) 
    return value && `<web-post title="${value}"></web-post>` || EMPTY
  }

  whenAuthor () {
    this.refresh ()
  }

}

Registry.set ('post-title', Post)
