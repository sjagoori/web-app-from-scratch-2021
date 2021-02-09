import { updateUI } from './render.js'

const body = document.body

export function router(event) {

  // const routes = [
  //   {
  //     name: 'Bitcoin'
  //   }
  // ]

  // let a = event != undefined ? routes.map(key => key.name.endsWith(event) ? key : false).filter(item => typeof item === 'object')[0] : false
  // console.log(a)



  // const routes = [
  //   {
  //     path: '/',
  //     template: '<h1>Home</h1>'
  //   },
  //   {
  //     path: `/${event}`,
  //     template: `<h1>${event}</h1>`,
  //   }
  // ];

  // console.log(event != undefined ? routes.map(key => key.path.endsWith(event) ? key : false).filter(item => typeof item === 'object')[0] : false)

  // let hash = window.location.hash
  // console.log(hash)
  // let render = currentPath == '/spa/' ? null : routes.map(key => key.path.endsWith(event) ? key : false).filter(item => typeof item === 'object')[0]
  // console.log(render)
  // render != null ? body.innerHTML = render : null
  // body.innerHTML = render

  // const a = routes.map(key => key.path.endsWith(event) ? key : false).filter(item => typeof item === 'object')[0]
  // console.log(a)
  // window.onload = () => {
  //   console.log('loaded')
  //   return window.history.pushState({}, a, event)
  // }
  // event != undefined ? window.history.pushState({}, a, event) : null

  // event != undefined ?  body.innerHTML = routes[event] : false

  // return window.location
}