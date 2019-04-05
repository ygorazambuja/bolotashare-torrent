import App from './app'
import torrent from 'torrent-search-api'

App.listen(process.env.PORT || 1234, () => {
  console.log('server running on port 1234')
})
