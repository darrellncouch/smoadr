const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));


app.set('view engine', 'ejs');

require("./config/session.js")(app);

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
