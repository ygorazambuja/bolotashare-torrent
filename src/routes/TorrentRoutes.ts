import { Router } from 'express'
import {
  TorrentSearch,
  GetProviders,
  searchTorrent
} from '../controller/TorrentApiControllers'

const routes = Router()

routes.get('/torrent/:query/:items', searchTorrent)

routes.get('/torrent/:query', TorrentSearch)
routes.get('/providers', GetProviders)

export default routes
