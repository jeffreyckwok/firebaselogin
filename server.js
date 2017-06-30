let express = require('express');

let app = express();

const path = require('path');

let bodyParser = require('body-parser');

let session = require('express-session');

var sessionConfig = {
  secret: "itsadogslifeforme",
  resave: false,
  saveUninitialized: true,
  name: "myCookie",
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000
  }
}

app.use(session(sessionConfig));

app.use(express.static(path.join(__dirname, 'public', 'dist')));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.get('*', function (req, res) {
  res.sendFile(path.resolve('public/dist/index.html'));
})

app.listen(6789, function() {
  console.log("The server is running on port 6789")
})
