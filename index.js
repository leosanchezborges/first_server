const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  res.send({
    message: 'any response',
    code: 42
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`)
})