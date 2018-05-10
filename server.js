const express = require ('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) =>{
  return text.toUpperCase();
});

app.get('/', (req, res)=> {   //route handler registration
 //res.send('<h1>Hello Express!</h1'); //response for http request
 res.render('home.hbs', {
   pageTitle: 'Home Page',
   welcomeMessage: 'Welcome to PACIS Contacts',
 });

});

app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle: 'About Page',

  });
});

app.get('/projects', (req, res) =>{
  res.render('projects.hbs', {
    pageTitle: 'Projects',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});  //bind to port
