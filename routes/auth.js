var authcontroller = require('../controllers/authcontroller');
 
module.exports = function(app, passport) {
 
    app.get('/signup', authcontroller.signup);
    app.get('/signin', authcontroller.signin);
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
    ));
 
    app.get('/dashboard', isLoggedIn, authcontroller.dashboard);
    // app.get('/users', isLoggedIn, authcontroller.members);
    app.get('/plantrip', isLoggedIn, authcontroller.plantrip);

    app.get('/home', isLoggedIn, authcontroller.home);

    app.get('/logout', authcontroller.logout);
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
    ));
 
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
 
    }

}