var passport = require('passport');
var Account = require('./models/account');
var router = require('express').Router();
const ctrlAccount = require('./ctrls/account');
const ctrlWeek = require('./ctrls/board');

// main view - display week - if not logged in, redirect to login screen
// TODO: if you are not a member of fit24 group, redirect to forums
router.get('/', function(req, res) {
  if (!req.user) {
    res.redirect('/login');
  }
  else {
    //res.render('index', {user: req.user});
    res.redirect('/openings');
  }
});

// now we allow anybody to register, TODO: move to admin zone
router.get('/register', function(req, res) {
  console.log(req.query);
  if (req.query.error)
    res.render('register', {error: req.query.error});
  else
    res.render('register', {});
});

router.post('/register', function(req, res, next) {
  console.log('registering user');
  console.log(req.body.email);
  let roles = [];
  if (!req.body.email) {
    res.redirect('/register?error=email');
    return;
  }
  if (req.body.admin === "on") roles.push('admin');
  Account.register(new Account({username: req.body.username, email: req.body.email, roles: roles}), req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');

    res.redirect('/openings');
  });
});

router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), ctrlAccount.postLogin);

// AUTENTICATED ZONE: beyond this point we allow only logged users
router.use(function (req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  }
  else {
    next();  // User found so continue to routes
  }
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// list openings
router.get('/openings', ctrlWeek.getWeeks);

// display move
router.get('/move/:move', ctrlBoard.getMove);

// display move - piece selected
router.get('/move/:move/:from', ctrlBoard.getMove);

// Make move
router.post('/board/:from/:to', ctrlBoard.makeMove);


// =======================================================================
// ADMIN ZONE: routes beyond this point are accessible only for admins
function isAdmin(user) {
console.log('usere ', user);
  return user && user.roles && user.roles.indexOf('admin') > -1;
}

router.use(function(req, res, next) {
  if (isAdmin(req.user)) {
console.log('je admin');
    next();
    return;
  }
  res.render('err403', {user: req.user});
});


// TODO: remove
//router.get('/admin', function(req, res) {
  //res.render('admin', {user: req.user});
//});


/*
// disable user
router.get('/admin/uzivatel/:user/blokovat', ctrlAccount.getDisableUser);
router.post('/admin/uzivatel/:user/blokovat', ctrlAccount.postDisableUser);

// enable user
router.get('/admin/uzivatel/:user/odblokovat', ctrlAccount.getEnableUser);
router.post('/admin/uzivatel/:user/odblokovat', ctrlAccount.postEnableUser);

// delete user
router.get('/admin/uzivatel/:user/odstranit', ctrlAccount.getDeleteUser);
router.post('/admin/uzivatel/:user/odstranit', ctrlAccount.postDeleteUser);

// list users
router.get('/admin/uzivatele', ctrlAccount.getUsers);

*/


module.exports = router;
