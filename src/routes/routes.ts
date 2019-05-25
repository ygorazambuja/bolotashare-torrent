import { Router } from 'express'
import torrentRoutes from './TorrentRoutes'
import userRoutes from './UserRoutes'

const routes = Router()

routes.get('/', (req, res, next) => {
  const help = {
    'torrent': '/torrent/something',
    'status': '/status',
    'customSearch': { link: '/torrentCustomSearch',
      'props as Json': {
        query: 'Your Search', category: 'All, Movies, Tv', items: 'Amount of items you wanna search'
      } }
  }
  res.send(help)
})

routes.use(torrentRoutes)
routes.use(userRoutes)

export default routes
