import { Router } from 'express'
import {
  TorrentSearch,
  Status,
  TorrentCustomSearch,
  GetProviders,
  searchTorrent
} from '../controller/TorrentApiControllers'
import middlewares from '../middlewares/auth'

const routes = Router()

routes.get('/search/:query/:items', searchTorrent)

routes.get('/torrent/:query', TorrentSearch)
routes.get('/status', Status, middlewares)
routes.get('/torrentCustomSearch', TorrentCustomSearch)
routes.get('/providers', GetProviders)

export default routes
