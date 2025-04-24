import Posts from '../../../posts/posts.js'

const KEY    = 'key'
const SLUG   = 'slug'
const STAMP  = 'tstamp'
const AUTHOR = 'author'

function Finder (post, key) {
  return {
    key    (x) { return post[KEY]   == x },
    title  (x) { return post[SLUG]  == x },
    date   (x) { return post[STAMP] == x },
    author (x) { return post[AUTHOR].toLowerCase ().startsWith (x) },
  } [key] 
}


function Helper (key) {

  function find (value) {
    for (let post of Posts) {
      let check = Finder (post, key)
      let ok    = check (value)
      if (ok) return post
    }
  }

  return { find }

}

export default Helper