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
// Home
app.get('/', (req, res) => {
  res.render('home.ejs');
});

// locations
app.get('/locations/uk', (req, res) => {
  res.render('locations/unitedKingdom.ejs');
});
app.get('/locations/seasia', (req, res) => {
  res.render('locations/seAsia.ejs');
});
app.get('/locations/bangkok', (req, res) => {
  res.render('locations/bangkok.ejs');
});
app.get('/locations/japan', (req, res) => {
  res.render('locations/japan.ejs');
});
app.get('/locations/taipei', (req, res) => {
  res.render('locations/taipei.ejs');
});
app.get('/locations/taitung', (req, res) => {
  res.render('locations/taitung.ejs');
});
app.get('/locations/shanghai', (req, res) => {
  res.render('locations/shanghai.ejs');
});
app.get('/locations/lisbon', (req, res) => {
  res.render('locations/lisbon.ejs');
});
app.get('/locations/europe', (req, res) => {
  res.render('locations/europe.ejs');
});

// about
app.get('/about', (req, res) => {
  res.render('about.ejs');
});

// start server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
