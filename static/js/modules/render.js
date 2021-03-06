import { rounding } from './rounding.js'
import { getColors } from './colors.js'

const header = document.getElementsByTagName('header')[0]
const body = document.getElementsByTagName('body')[0]

/**
 * Funtion appends rendered data to header.
 * @param {Object} data 
 */
export function render(data) {
  const nav = document.createElement('nav')
  nav.setAttribute('data-route', 'toplist')
  const ul = document.createElement('ul')

  const descContainer = document.createElement('div')
  const title = document.createElement('h1')
  title.textContent = 'CoinMarketCap'
  const lead = document.createElement('p')
  lead.textContent = 'This website displays the top 12 cryptocurrencies by market cap in biggest-to-smallest order.'

  const priceUp = document.createElement('p')
  priceUp.textContent = 'Green underline = stonk value has increased'
  priceUp.setAttribute('price', 'green')

  const priceDown = document.createElement('p')
  priceDown.textContent = 'Red underline = stonk value has decreased'
  priceDown.setAttribute('price', 'red')

  descContainer.appendChild(title)
  descContainer.appendChild(lead)
  descContainer.appendChild(priceUp)
  descContainer.appendChild(priceDown)

  nav.appendChild(descContainer)
  nav.appendChild(ul)
  
  header.appendChild(nav)

  Object.keys(data).map((key, index) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.href = '#' + data[key].name
    const subContainer = document.createElement('div')
    const image = document.createElement('img')
    const title = document.createElement('h1')
    const price = document.createElement('p')
    const percentage = document.createElement('p')

    li.setAttribute('card', rounding(data[key].quote[0].percent_change_24h) > 0 ? 'green' : 'red')
    title.textContent = data[key].name
    image.src = data[key].logo
    price.textContent = '$' + rounding(data[key].quote[0].price)
    percentage.setAttribute('price', rounding(data[key].quote[0].percent_change_24h) > 0 ? 'green' : 'red')
    percentage.textContent = rounding(data[key].quote[0].percent_change_24h) > 0 ? '📈 ' + rounding(data[key].quote[0].percent_change_24h) + '%' : '📉' + rounding(data[key].quote[0].percent_change_24h) + '%'

    subContainer.appendChild(image)
    subContainer.appendChild(title)
    subContainer.appendChild(percentage)

    link.appendChild(subContainer)
    li.appendChild(link)
    ul.appendChild(li)
  })

  document.getElementsByTagName('ul')[1]
    .addEventListener('click', e => {
      let div = e.path.map(key => key.nodeName == "DIV" ? key : false).filter(item => typeof item === 'object')[0]
      renderDetailPage(div.childNodes[1].textContent, data, nav)
    })
  return true;
}

/**
 * Function renders the detail page for given coin 
 * @param {String} pick - picked option from the menu
 * @param {Object} data - dataset with information regarding the picked value
 * @param {HTMLElement} nav - the main menu
 */
function renderDetailPage(pick, data, nav) {
  nav.style.display = 'none'

  let renderData = Object.values(data).map(key => key.name == pick ? key : false).filter(item => typeof item === 'object')[0]

  const container = document.createElement('div')
  container.setAttribute('data-route', 'detailpage')
  const tagContainer = document.createElement('div')
  const backButton = document.createElement('a')
  const image = document.createElement('img')
  const title = document.createElement('h1')
  const symbol = document.createElement('span')
  const price = document.createElement('span')
  const percentage = document.createElement('span')
  const finContainer = document.createElement('div')
  const description = document.createElement('p')
  const website = document.createElement('a')
  const github = document.createElement('a')

  container.setAttribute('class', 'detail-card')
  backButton.textContent = 'Back'
  backButton.setAttribute('href', '#home')
  image.src = renderData.logo
  title.textContent = renderData.name
  symbol.textContent = '$' + renderData.symbol
  price.textContent = '$' + rounding(renderData.quote[0].price)
  price.setAttribute('price', rounding(renderData.quote[0].percent_change_24h) > 0 ? 'green' : 'red')
  percentage.setAttribute('price', rounding(renderData.quote[0].percent_change_24h) > 0 ? 'green' : 'red')
  percentage.textContent = rounding(renderData.quote[0].percent_change_24h) > 0 ? '📈 ' + rounding(renderData.quote[0].percent_change_24h) + '%' : '📉' + rounding(renderData.quote[0].percent_change_24h) + '%'
  description.textContent = renderData.description
  website.textContent = 'Website', website.setAttribute('href', Object.values(renderData.urls.website))
  github.textContent = 'Github', github.setAttribute('href', Object.values(renderData.urls.source_code))

  container.appendChild(backButton)
  container.appendChild(image)
  container.appendChild(title)
  container.appendChild(symbol)
  finContainer.appendChild(price)
  finContainer.appendChild(percentage)
  container.appendChild(finContainer)
  container.appendChild(description)
  container.appendChild(website)
  github.getAttribute('href') != '' ? container.appendChild(github) : null

  Object.values(renderData['tag-names']).map((key, index) => {
    const tag = document.createElement('span')
    tag.textContent = key
    tag.setAttribute('class', 'tag')
    tag.style.backgroundColor = getColors()[index]
    tagContainer.appendChild(tag)
  })

  container.appendChild(tagContainer)
  body.appendChild(container)
}

/**
 * Funtion displays selected (parent)element and hides others.
 * @param {String} route - route string
 */
export function updateUI(route) {
  let activeSection = document.querySelector(`[data-route=${route}]`);
  let bodyContent = document.querySelectorAll('[data-route]')
  Object.values(bodyContent).map((key) => key.attributes[0].textContent != 'nav' ? key.style.display = 'none' : false)
  activeSection.style.display = 'block'
}