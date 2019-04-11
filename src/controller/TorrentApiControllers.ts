import torrent from 'torrent-search-api'
// torrent.enableProvider('ExtraTorrent')
// torrent.enableProvider('1337x')
// torrent.enablePublicProviders()
// torrent.enableProvider('Torrentz2')

export async function TorrentSearch (request, response) {
  torrent.enableProvider('ThePirateBay')

  const { query } = request.params
  const resultQuery = await torrent.search(query, 'All', 10)
  const array = resultQuery.sort((a, b) => {
    if (a.seeds < b.seeds) return 1
    if (a.seeds > b.seeds) return -1
  })
  response.send(array)
}
export async function Status (request, response) {
  const ThePirateBay = await torrent.isProviderActive('ThePirateBay')
  const ExtraTorrent = await torrent.isProviderActive('ExtraTorrent')
  const Torrentz2 = await torrent.isProviderActive('Torrentz2')
  const t1337x = await torrent.isProviderActive('1337x')

  const Providers = {
    ThePirateBay, ExtraTorrent, Torrentz2, t1337x
  }

  response.send(Providers)
}
export async function TorrentCustomSearch (request, response) {
  // await torrent.enablePublicProviders()

  let { query, category, items, providers } = request.body

  console.log(request.body)

  if (!query) return response.send({ err: 'error, query null' })
  if (!category) category = 'All'
  if (!items) items = 10
  if (!providers) providers = ['thepiratebay']

  await torrent.enableProvider(...providers)
  const resultQuery = await torrent.search(query, category, items)
  const array = resultQuery.sort((a, b) => {
    if (a.seeds < b.seeds) return 1
    if (a.seeds > b.seeds) return -1
  })
  response.send(array)
}

export async function GetProviders (request, response) {
  const providersInformation = await torrent.getProviders()
  response.send(providersInformation)
}
