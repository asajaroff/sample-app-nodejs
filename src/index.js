const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Sample service</h1><br><p>This aims to be an example service. It provides a test `/liveness.json` endpoint.')
})

app.get('/liveness.json', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Process is up and running',
    date: new Date()
  }

  res.status(200).send(data);
  console.log(`Liveness probe received`)
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  app.close(() => {
    console.log('HTTP server closed')
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
