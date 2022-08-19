import {handle} from './route.js'


const body = document.querySelector ('body')
const home = document.querySelector ('#home')
const universe = document.querySelector ('#universe')
const exploration = document.querySelector ('#exploration')


function routePrevent (event) {

  event = event || window.event
  event.preventDefault(event)

  window.history.pushState({}, "", event.target.href)

  handle()

}


export default function initEvents () {


  home.addEventListener ('click', () => {

    body.classList.remove ('universeBody')
    body.classList.add ('homeBody')
    body.classList.remove ('explorationBody')

    routePrevent()
    
  })
  
  universe.addEventListener ('click', () => {
  
    body.classList.add ('universeBody')
    body.classList.remove ('homeBody')
    body.classList.remove ('explorationBody')

    routePrevent()
  
  })
  
  exploration.addEventListener ('click', () => {
  
    body.classList.remove ('universeBody')
    body.classList.remove ('homeBody')
    body.classList.add ('explorationBody')

    routePrevent()
  
  })


}

