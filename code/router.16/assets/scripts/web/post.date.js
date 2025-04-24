import Component from '../helpers/helper.core.js'
import Registry  from '../helpers/helper.registry.js'

const DAY   = 'day'
const MONTH = 'month'
const YEAR  = 'year'
const EMPTY = ''

class Post extends Component {

  constructor () {
    super ()
  }

  async render () {
    let day   = this.getAttribute (DAY) 
    let month = this.getAttribute (MONTH) 
    let year  = this.getAttribute (YEAR) 
    let value = day && month && year
    return value && `<web-post date="${day} ${month}, ${year}"></web-post>` || EMPTY
  }

  whenAuthor () {
    this.refresh ()
  }

}

Registry.set ('post-date', Post)
