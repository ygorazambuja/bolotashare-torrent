import { Router } from 'express'
import { TorrentSearch, Status, TorrentCustomSearch } from '../controller/TorrentApiControllers'
import middlewares from '../middlewares/auth'

const routes = Router()

routes.get('/torrent/:query', TorrentSearch, middlewares)
routes.get('/status', Status, middlewares)
routes.get('/torrentCustomSearch', TorrentCustomSearch, middlewares)

export default routes
