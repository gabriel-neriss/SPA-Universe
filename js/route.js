
// mapeamento de rotas 

const routes = {

  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html",
  "404": "/pages/404.html",

}

export function handle () {
  
    const {pathname} = window.location
    const route = routes [pathname] || routes [404]
  
    fetch(route)
    .then (data => data.text())
    .then(html => {
  
        document.querySelector ('#app').innerHTML = html
  
    })
  }
  
<<<<<<< HEAD
 
=======

>>>>>>> 11b87e644f14dcae0f5e2575bd101f7b3109833d
  
