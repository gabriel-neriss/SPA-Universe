import initEvents from "./events.js"
import {handle} from './route.js'



initEvents()
handle()
    
window.onpopstate = () => handle()












