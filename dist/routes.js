'use strict'; function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }Object.defineProperty(exports, '__esModule', { value: true }); var _express = require('express')
var _torrentsearchapi = require('torrent-search-api'); var _torrentsearchapi2 = _interopRequireDefault(_torrentsearchapi)

_torrentsearchapi2.default.enableProvider('ThePirateBay', 'ExtraTorrent', '1337x', 'Torrentz2')
_torrentsearchapi2.default.enableProvider('ExtraTorrent')
_torrentsearchapi2.default.enableProvider('1337x')
_torrentsearchapi2.default.enableProvider('Torrentz2')

const routes = _express.Router.call(void 0)

routes.get('/torrent/:query', async (req, res, next) => {
  console.log(req.params)
  const { query } = req.params
  const resultQuery = await _torrentsearchapi2.default.search(query, 'All', 50)
  res.send(resultQuery)
})

routes.get('/status', async (req, res, next) => {
  const ThePirateBay = await _torrentsearchapi2.default.isProviderActive('ThePirateBay')
  const ExtraTorrent = await _torrentsearchapi2.default.isProviderActive('ExtraTorrent')
  const Torrentz2 = await _torrentsearchapi2.default.isProviderActive('Torrentz2')
  const t1337x = await _torrentsearchapi2.default.isProviderActive('1337x')

  const Providers = {
    ThePirateBay, ExtraTorrent, Torrentz2, t1337x
  }

  res.send(Providers)
})

exports.default = routes
