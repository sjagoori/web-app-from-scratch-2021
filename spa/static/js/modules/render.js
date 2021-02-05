import { rounding } from './rounding.js'

const header = document.getElementsByTagName('header')[0]
const body = document.getElementsByTagName('body')[0]

/**
 * Funtion appends rendered data to header.
 * @param {Object} data 
 */
export function render(data) {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  nav.appendChild(ul)
  header.appendChild(nav)

  Object.keys(data).map((key, index) => {
    const li = document.createElement('li')
    const subContainer = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('h1')
    const price = document.createElement('p')
    const percentage = document.createElement('p')
    
    li.setAttribute('card', rounding(data[key].quote[0].percent_change_24h) > 0 ? 'green' : 'red')
    title.textContent = data[key].name
    image.src = data[key].logo
    price.textContent = '$' + rounding(data[key].quote[0].price)
    price.setAttribute('price', rounding(data[key].quote[0].percent_change_24h) > 0 ? 'green' : 'red')

    subContainer.appendChild(image)
    subContainer.appendChild(title)
    subContainer.appendChild(price)

    li.appendChild(subContainer)
    ul.appendChild(li)
  })

  document.getElementsByTagName('ul')[0]
    .addEventListener('click', e => {
     let div = e.path.map(key => key.nodeName == "DIV" ? key : false).filter(item => typeof item === 'object')[0]
      renderDetailPage(div.childNodes[1].textContent, data, nav)
    })
}

/**
 * Function renders the detail page for given coin 
 * @param {String} pick picked option from the menu
 * @param {Object} data dataset with information regarding the picked value
 * @param {HTMLElement} nav the main menu
 */
function renderDetailPage(pick, data, nav) {
  nav.style.display = 'none'

  let renderData = Object.values(data).map(key => key.name == pick ? key : false).filter(item => typeof item === 'object')[0]

  const container = document.createElement('div')
  const backButton = document.createElement('button')
  const image = document.createElement('img')
  const title = document.createElement('h1')
  const symbol = document.createElement('span')
  const price = document.createElement('span')
  const percentage = document.createElement('span')
  const description = document.createElement('p')
  const website = document.createElement('a')
  const github = document.createElement('a')

  backButton.textContent = 'Back'
  image.src = renderData.logo
  title.textContent = renderData.name
  symbol.textContent = renderData.symbol
  price.textContent = '$' + rounding(renderData.quote[0].price)
  percentage.textContent = rounding(renderData.quote[0].percent_change_24h) > 0 ? '📈 ' + rounding(renderData.quote[0].percent_change_24h) + '%' : '📉' + rounding(renderData.quote[0].percent_change_24h) + '%'
  description.textContent = renderData.description
  website.textContent = 'Website', website.setAttribute('href', Object.values(renderData.urls.website))
  github.textContent = 'Github', github.setAttribute('href', Object.values(renderData.urls.source_code))

  container.appendChild(backButton)
  container.appendChild(image)
  container.appendChild(title)
  container.appendChild(symbol)
  container.appendChild(price)
  container.appendChild(percentage)
  container.appendChild(description)
  container.appendChild(website)
  container.appendChild(github)

  Object.values(renderData['tag-names']).map(key => {
    const tag = document.createElement('span')
    tag.textContent = key
    tag.setAttribute('class', 'tag')
    container.appendChild(tag)
  })

  body.appendChild(container)

  document.getElementsByTagName('button')[0]
    .addEventListener('click', () => {
      container.remove()
      nav.style.display = 'block'
    })

}