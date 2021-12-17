const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.use(express.static('public'))

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.set("views", './views')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
  })

app.listen(port, () => console.log('Express started on http://localhost:${port}; ' + 'press Ctrl-C to terminate.'))
