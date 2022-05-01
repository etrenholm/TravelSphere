// packages
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path')

// connect PORT
const app = express();
const PORT = process.env.PORT || 3001;

// start handlebars
const hbs = exphbs.create({ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// start sequelize
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// start session
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

// connect routes
const routes = require('./controllers/');
app.use(routes);

// connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});