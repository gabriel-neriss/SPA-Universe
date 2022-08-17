

// images da pages 

const body = document.querySelector ('body')
const home = document.querySelector ('#home')
const universe = document.querySelector ('#universe')
const exploration = document.querySelector ('#exploration')


export function initEvents () {

  home.addEventListener ('click', () => {

    body.classList.remove ('universeBody')
    body.classList.add ('homeBody')
    body.classList.remove ('explorationBody')
    
  })
  
  universe.addEventListener ('click', () => {
  
    body.classList.add ('universeBody')
    body.classList.remove ('homeBody')
    body.classList.remove ('explorationBody')
  
  })
  
  exploration.addEventListener ('click', () => {
  
    body.classList.remove ('universeBody')
    body.classList.remove ('homeBody')
    body.classList.add ('explorationBody')
  
  })
  

}

