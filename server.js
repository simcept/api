const express = require('express')

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Thoughts, concepts and ideas.\n'))

app.get('/_health', (req, res) => res.send('OK\n'))

app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}.`))

