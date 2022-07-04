const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const port = 3000
const app = express()
const hbs = handlebars.create({
    extname: '.hbs',
})


app.use(morgan('combined'))

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))
// console.log('path: ', path.join(__dirname, 'resource/views'));

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.render('home')
})

app.get('/news', (req, res) => {
    //   res.send('Hello World!')
      res.render('news')
    })
    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})