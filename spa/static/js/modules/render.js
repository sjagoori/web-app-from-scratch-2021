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

  Object.keys(data).map(key => {
    // console.log(data[key].id)
    let li = document.createElement('li')
    // let link = document.createElement('a')
    li.textContent = data[key].name
    // li.appendChild(link)
    ul.appendChild(li)
  })

  document.getElementsByTagName('ul')[0]
    .addEventListener('click', e => {
      renderDetailPage(e.target.innerText, data, nav)
    })
}

/**
 * Function renders the detail page for given coin 
 * @param {String} pick picked option from the menu
 * @param {Object} data dataset with information regarding the picked value
 * @param {HTMLElement} nav the main menu
 */
function renderDetailPage(pick, data, nav) {
  console.warn('detail page rendered')
  nav.style.display = 'none'

  let renderData = Object.values(data).map(key => key.name == pick ? key : false).filter(item => typeof item === 'object')[0]
  console.log(renderData)


  const container = document.createElement('div')
  const backButton = document.createElement('button')
  const image = document.createElement('img')
  const title = document.createElement('h1')
  const symbol = document.createElement('span')
  const description = document.createElement('p')
  const website = document.createElement('a')
  const github = document.createElement('a')

  backButton.textContent = 'Back'
  image.src = renderData.logo
  title.textContent = renderData.name
  symbol.textContent = renderData.symbol
  description.textContent = renderData.description
  website.textContent = 'Website', website.setAttribute('href', Object.values(renderData.urls.website))
  github.textContent = 'Github', github.setAttribute('href', Object.values(renderData.urls.source_code))
  
  container.appendChild(backButton)
  container.appendChild(image)
  container.appendChild(title)
  container.appendChild(symbol)
  container.appendChild(description)
  container.appendChild(website)
  container.appendChild(github)

  Object.values(renderData['tag-names']).map(key => {
    const tag = document.createElement('span')
    tag.textContent = key
    container.appendChild(tag)
  })

  body.appendChild(container)


  document.getElementsByTagName('button')[0]
    .addEventListener('click', () => {
      container.remove()
      nav.style.display = 'block'
    })

}