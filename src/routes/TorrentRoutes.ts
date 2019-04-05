import { Router } from 'express'
import { TorrentSearch, Status, TorrentCustomSearch } from '../controller/TorrentApiControllers'

const routes = Router()

routes.get('/torrent/:query', TorrentSearch)
routes.get('/status', Status)
routes.get('/torrentCustomSearch', TorrentCustomSearch)
export default routes
