const Move = require('../models/move');

//router.get('/start/moves', 
module.exports.getOpenings = function (req, res) {

    Week.find({ "init.name": { $exists: true } }, (err, moves) => {
        if (err)
            render('error', { user: req.user, error: err });
            return;
        }
        const startWeeks = moves.map(m => {
            //const noTerms = w.days.map(d => (d.terms) ? d.terms.length : 0).reduce((acc, val) => { return acc+val}, 0);
            //console.log(noTerms);
            return { name: w.init.name, 
                     type: w.init.type,
                     whiteStarts: w.whiteStarts
                     };
        });
        console.log('startMoves: ', startMoves);
        res.render('startMoves', {user: req.user, startMoves: startMoves});
    });
  
    res.render('not-impl', {user: req.user});
}

//router.get('/move/:move', 
module.exports.getMove = function (req, res) {
  console.log(req.user);

  Week.findOne({ startDate: req.params.week }, (err, week) => {
   if (err)
     util.renderr(res, 'Nemuzu najit tyden', error);
   else
     res.render('cviceni', {user: req.user, session: { userName: req.user.username, isAdmin: true },
       testParams: true, data: week});
  });

  res.render('not-impl', {user: req.user});
}

//router.get('/move/:move/:from', 
module.exports.getMoveFrom = function (req, res) {

  res.render('not-impl', {user: req.user});
}

//router.post('/move/:move/:from/:to', 
module.exports.postMoveFromTo = function (req, res) {

  res.render('not-impl', {user: req.user});
}

//router.delete('/move/:move', 
module.exports.deleteMove = function (req, res) {

  res.render('createWeek', {user: req.user});
}

//router.post('/move/:move' )
// Parameters in JSON body
// oldMoveId - moved from move - used for rendering the back button
// oldMoves - move list in a special format (e2-e4 c7-c5,Ng1-f3 e7-e6) easy to parse and render on the screen 
// title - from previous move
// notes - can be edited later or during the move
module.exports.postCreateMove = function (req, res) {
    // check input data
    if (!req.body.oldMoveId || !req.body.title || !req.body.isWhiteOnMove) {
        res.render('error', {user: req.user, message: 'Missing fields', error: {}});
        return;
    }
    // read previous move data

    // check for checks and mate

    // calculate new board
    
    // check for mate
    
    // make new document
    let newMove = {
        // no init
        isWhiteOnMove: isWhiteOnMove,
        state: getNewState
  
  
        isWhite: isWhite,
        //firstMove -- get first move and store it in the db
        created: created,
        title: title,
        notes: notes
    };
    // save new document
    Move.create(newOpening, (err, results) => {
        if (err)
            util.renderr(res, 'Cannot save a new move', err, newWeek);
        else
            res.render('not-impl', {user: req.user});
      });
  
}

// edit move
