import initEvents from "./events.js"
import {handle} from './route.js'

// images da pages 

const body = document.querySelector ('body')
const home = document.querySelector ('#home')
const universe = document.querySelector ('#universe')
const exploration = document.querySelector ('#exploration')


initEvents()
handle()
    
window.onpopstate = () => handle()



export {

  body,
  home,
  universe,
  exploration

}









