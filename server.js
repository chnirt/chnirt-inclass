const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.set('port', process.env.PORT || 14044)

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// eslint-disable-next-line func-names
const server = app.listen(app.get('port'), function() {
  // eslint-disable-next-line no-console
  console.log('listening on port ', server.address().port)
})
