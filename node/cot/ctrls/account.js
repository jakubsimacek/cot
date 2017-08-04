//mongoose = require('mongoose');

//router.get('/admin/uzivatel/:user/odstranit', ctrlAccounts.
module.exports.getDeleteUser = function (req, res) {

  res.render('not-impl', {user: req.user});
}

//router.post('/admin/uzivatel/:user/odstranit', ctrlAccounts.
module.exports.postDeleteUser = function (req, res) {

  res.render('not-impl', {user: req.user});
}

//router.get('/admin/uzivatele', ctrlAccounts.
module.exports.getUsers = function (req, res) {

  res.render('not-impl', {user: req.user});
}


module.exports.postLogin = function (req, res) {
  //console.log('login ctrl');
  //console.log(req.user);
  //req.user.lastLogin = new Date();
  //req.user.email = 'e@m.l';
  //req.user.save(function(err) {
    //console.log(err);
  //});
  res.redirect('/');
}

