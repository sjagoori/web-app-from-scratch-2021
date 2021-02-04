import { getData } from './modules/api.js'
import { render } from './modules/render.js'

async function main() {
  let topList = await getData('https://shacors.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=12&CMC_PRO_API_KEY=a50e1e84-9b13-4d34-86e5-8b386c49c31c')
  let infoList = await getData('https://shacors.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=' + topList.data.data.map(item => item.id).toString() + '&CMC_PRO_API_KEY=a50e1e84-9b13-4d34-86e5-8b386c49c31c')

  let merged = Object.values(infoList.data.data).map(key => {
    return key.quote = Object.values(topList.data.data)
      .map(item => item.name == key.name ? item.quote.USD : false)
      .filter(item => typeof item === 'object')
  });

  ({ ...infoList.data.data, merged }, delete infoList.data.data.merged)

  render(infoList.data.data)
}

main()