import { Router, Request, Response } from 'express'
import torrentRoutes from './TorrentRoutes'
const routes = Router()

routes.get('/', (_: Request, response: Response) => {
  const help = {
    torrent: '/torrent/something',
    status: '/status'
  }
  response.send(help)
})

routes.use(torrentRoutes)

export default routes
