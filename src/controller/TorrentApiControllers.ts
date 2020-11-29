import torrent from 'torrent-search-api'
import { Request, Response } from 'express'
// torrent.enableProvider('ExtraTorrent')
// torrent.enableProvider('1337x')
// torrent.enablePublicProviders()
// torrent.enableProvider('Torrentz2')

export async function TorrentSearch(request: Request, response: Response) {
  torrent.enableProvider('ThePirateBay')

  const { query } = request.params
  const resultQuery = await torrent.search(query, 'All', 10)
  // const array = resultQuery.sort((a: Torrent, b: Torrent) => {
  //   if (a. < b.seeds) return 1
  //   if (a.seeds > b.seeds) return -1
  // })
  response.send(resultQuery)
}
export async function Status(_: Request, response: Response) {
  const ThePirateBay = torrent.isProviderActive('ThePirateBay')
  const ExtraTorrent = torrent.isProviderActive('ExtraTorrent')
  const Torrentz2 = torrent.isProviderActive('Torrentz2')
  const t1337x = torrent.isProviderActive('1337x')

  const Providers = {
    ThePirateBay,
    ExtraTorrent,
    Torrentz2,
    t1337x
  }

  response.send(Providers)
}

export async function GetProviders(request: Request, response: Response) {
  const providersInformation = torrent.getProviders()
  response.send(providersInformation)
}

export async function searchTorrent(request: Request, response: Response) {
  torrent.enableProvider('ThePirateBay')

  const { query, items = '20' } = request.params

  if (!query) response.send({ error: 'Query cannot be null' })
  const resultQuery = await torrent.search(query, 'All', Number.parseInt(items))
  response.send(resultQuery)
}
