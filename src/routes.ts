import { Router } from 'express'
import torrent from 'torrent-search-api'

torrent.enableProvider('ThePirateBay', 'ExtraTorrent', '1337x', 'Torrentz2')
torrent.enableProvider('ExtraTorrent')
torrent.enableProvider('1337x')
torrent.enableProvider('Torrentz2')

const routes = Router()

routes.get('/torrent/:query', async (req, res, next) => {
  console.log(req.params)
  const { query } = req.params
  const resultQuery = await torrent.search(query, 'All', 50)
  res.send(resultQuery)
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
