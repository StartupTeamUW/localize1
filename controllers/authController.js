

var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('user_form');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.dashboard = function (req, res) {
    res.render('kevinUserDetailedPage', { msg: "Hello", user: req.user });
    console.log(req.user)
}
exports.everything = function (req, res) {
    res.render('everything', { msg: "Hello", user: req.user });
    console.log(req.user)
}


exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
 
}

