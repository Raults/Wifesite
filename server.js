var express = require('express'),
  path = require('path'),
  app = express(),
  port = 6969;

app.use('/assets', express.static(__dirname + '/assets'));
//localhost:port/assets/css/filename.css
//localhost:port/assets/html/filename.html
//localhost:port/assets/img/filename.png
//localhost:port/assets/js/filename.js

app.get('/', (req, res)=>{
  res.sendFile('html/home.html', {root: path.join(__dirname, './assets')});
});
app.get('/home', (req, res)=>{
  res.sendFile('html/home.html', {root: path.join(__dirname, './assets')});
});
app.get('/template', (req, res)=>{
  res.sendFile('html/template.html', {root: path.join(__dirname, './assets')});
});
app.get('*', (req, res)=>{
  res.sendFile('html/404.html', {root: path.join(__dirname, './assets')});
});


app.listen(port, ()=>{
  console.log("Listening at port " + port);
});
