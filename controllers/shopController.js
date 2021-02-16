const User = require('../models/users');
exports.signIn = (req, res) => {
    res.render('signin');
}
exports.signUp = (req, res) => {
    res.render('signup');
}
exports.dashboard = (req, res) => {
    res.render('dashboard');
}
exports.register = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const comfirm_password = req.body.comfirm_password;

    const user = new User({
        username: username,
        password: password,
        registerAt: date.toISOString()
    }).save().then(result =>{
        res.redirect("/signin");
    }).catch(err => {
        res.render('signup', {message: "signup fail, try again"});
    })
}


