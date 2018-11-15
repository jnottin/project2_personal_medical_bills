const express = require('express')
const app = express()
const routes = require('./routes')
const hbs = require('hbs')
const methodOverride = require('method-override')
const parser = require('body-parser')


app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.set('view engine', 'hbs')
app.use(parser.urlencoded({ extended: true }));

app.use('/', routes)

// app.listen(3000, () => {
// })

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})

