import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

const KEY   = 'author'
const EMPTY = ''

class Post extends Component {

  constructor () {
    super ()
  }

  async render () {
    let value = this.getAttribute (KEY) 
    return value && `<web-post author="${value}"></web-post>` || EMPTY
  }

  whenAuthor () {
    this.refresh ()
  }

}

Registry.set ('post-author', Post)
