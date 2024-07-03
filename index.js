// install packages
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const ejsMate = require('ejs-mate');

// setting up views directory
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// serving static assets
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.engine('ejs', ejsMate);

// favicon
app.use(favicon(__dirname + '/public/favicon/favicon.png'));

//--------------- ROUTES -------------------- //
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/locations/seasia', (req, res) => {
  res.render('locations/seAsia/seAsia.ejs');
});

// start server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
