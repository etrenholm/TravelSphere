const router = require('express').Router();

// GET home
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard')
        return;
    }
    // RENDER to homepage.handlebars
    res.render('homepage')
});

// GET login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return;
    }
    // RENDER to login.handlebars
    res.render('login')
});

// GET signup
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/login')
        return;
    }
    // RENDER to signup.handlebars
    res.render('signup')
});

// GET trip info
router.get('/start', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/login')
        return;
    }
    // RENDER to trip-info.handlebars
    res.render('trip-info')
});


module.exports = router;