import { Router } from 'express'
import torrent from 'torrent-search-api'

// torrent.enableProvider('ExtraTorrent')
// torrent.enableProvider('1337x')
// torrent.enableProvider('Torrentz2')
torrent.enableProvider('ThePirateBay')

// torrent.enablePublicProviders()

const routes = Router()

routes.get('/torrent/:query', async (req, res, next) => {
  const { query } = req.params
  const resultQuery = await torrent.search(query, 'All', 10)
  const array = resultQuery.sort((a, b) => {
    if (a.seeds < b.seeds) return 1
    if (a.seeds > b.seeds) return -1
  })
  res.send(array)
})

routes.get('/testetorrent', async (req, res) => {
  const { query } = req.body
  const { category } = req.body
  const { items } = req.body

  const resultQuery = await torrent.search(query, category, items)

  // console.log(resultQuery.map(torrent => torrent.title))
  // const array = resultQuery.map(result => result.seeds)
  const array = resultQuery.sort((a, b) => {
    if (a.seeds < b.seeds) return 1
    if (a.seeds > b.seeds) return -1
  })
  res.send(array)
})

routes.get('/', (req, res, next) => {
  const help = {
    'torrent': '/torrent/something',
    'status': '/status'
  }
  res.sendStatus(200).send(help)
})

routes.get('/status', async (req, res, next) => {
  const ThePirateBay = await torrent.isProviderActive('ThePirateBay')
  const ExtraTorrent = await torrent.isProviderActive('ExtraTorrent')
  const Torrentz2 = await torrent.isProviderActive('Torrentz2')
  const t1337x = await torrent.isProviderActive('1337x')

  const Providers = {
    ThePirateBay, ExtraTorrent, Torrentz2, t1337x
  }

  res.send(Providers)
})

export default routes
