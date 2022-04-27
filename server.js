// packages
const express = require('express');
const session = require('express-session');
const path = require('path')

// connect PORT
const app = express();
const PORT = process.env.PORT || 3001;

// handlebars
const exphbs = require('express-handlebars');
// const helpers = require('./utils/helpers');
const hbs = exphbs.create({ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// sessions
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  }

app.use(session(sess))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
// const routes = require('./controllers/');
// app.use(routes);

// connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});