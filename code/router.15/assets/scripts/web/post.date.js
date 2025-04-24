import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

const KEY   = 'date'
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

  whenDate () {
    this.refresh ()
  }

}

Registry.set ('post-date', Post)
