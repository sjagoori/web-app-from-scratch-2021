import { getData } from './modules/api.js'
import { render, updateUI } from './modules/render.js'
const loader = document.getElementsByTagName('main')[0]

async function main() {
  let topList = await getData('https://shacors.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=12&CMC_PRO_API_KEY=a50e1e84-9b13-4d34-86e5-8b386c49c31c')
  let infoList = await getData('https://shacors.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=' + topList.data.data.map(item => item.id).toString() + '&CMC_PRO_API_KEY=a50e1e84-9b13-4d34-86e5-8b386c49c31c')

  //  adds quote array from toplist to infolist
  let merged = Object.values(infoList.data.data).map(key => {
    return key.quote = Object.values(topList.data.data)
      .map(item => item.name == key.name ? item.quote.USD : false)
      .filter(item => typeof item === 'object')
  });

  // merges newly made object to existing object, removes remaining object 
  let renderData = ({ ...infoList.data.data, merged }, delete infoList.data.data.merged) ? Object.values(infoList.data.data).sort((a, b) => b.quote[0].market_cap - a.quote[0].market_cap) : loader.textContent = 'Unable to fetch data'

  render(renderData) ? loader.style.display = 'none' : null

  routie({
    info: () => {
      updateUI('info');
    },
    home: () => [
      updateUI('toplist')
    ]
  })
}

main()