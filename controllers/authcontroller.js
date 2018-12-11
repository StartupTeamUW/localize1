

var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.dashboard = function(req, res) {
    res.render('kevinUserDetailedPage', {msg:"Hello", user: req.user });
    console.log(req.user)
}

exports.plantrip = function(req, res) {
    res.render('plantrip', {msg:"Hello", user: req.user });
    console.log(req.user)
}
exports.home = function(req, res) {
    res.render('home', {msg:"", user: req.user });
    console.log(req.user)
}


// exports.members = function(req, res) {
//     res.render('allmembers', {msg:"Hello", users: req.user });
//     console.log(req.user)
// }

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
 
}

