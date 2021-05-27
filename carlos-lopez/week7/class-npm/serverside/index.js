const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.listen(4000, () => console.log('Server is running in http://localhost:4000'))
