//Required modules
let express = require('express')
let layouts = require('express-ejs-layouts')

//instance
let app = express()

//Middleware and configs
app.set('view engine', 'ejs')
app.use(layouts)
app.use('/', express.static('static'))

// body parser that put the form data into req.body
app.use(express.urlencoded({ extended: false }))

// controllers
app.use('/dinosaurs', require ('./controllers/dinosaurs'))
app.use('/cryptids', require ('./controllers/cryptids'))

//routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('404')
})
//Listen
app.listen(3002, () => {
    console.log("Port 3002 is Live")
})