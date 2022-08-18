
// mapeamento de rotas 

const routes = {

  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html",

}

function route (event) {

  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()

}


function handle () {

  const {pathname} = window.location
  const route = routes [pathname] || routes [404]

  fetch(route)
  .then (data => data.text())
  .then(html => {

      document.querySelector ('#app').innerHTML = html

  })
}

  handle()
  
  window.onpopstate = () => handle()




// images da pages 

const body = document.querySelector ('body')
const home = document.querySelector ('#home')
const universe = document.querySelector ('#universe')
const exploration = document.querySelector ('#exploration')




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






