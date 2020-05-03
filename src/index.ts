import App from './app'

App.listen(process.env.PORT || 1234, () => {
  console.log('server running on port 1234')
})
