const mongoose = require('mongoose');

// fetches all start moves - query criteria to be added later
module.exports.findStartMoves = function(criteria) {
    Week.find({ "init.name": { $exists: true } }, (err, dbMoves) => {
        if (err)
            return { error: err };
      
        const startMoves = dbMoves.map(m => {
        return { moveId: m._id,
                 name: m.init.name, 
                 type: m.init.type,
                 whiteStarts: m.whiteStarts
        };
    });
    debug('startMoves: ', startMoves);
    return { startMoves: startMoves };
};

module.exports.saveStartMove = function(startMove) {

};

module.exports.saveMove = function(move) {

};

module.exports.findMoveById = function(moveId) {
    Week.findOne({ _id: moveId }, (err, dbMove) => {
        if (err)
            return { error: err };
        if (!move)
            return { error: "Move " + moveId + " not found!" };

    });
    debug('startMoves: ', dbMove);
    return { move: dbMove };
};

module.exports.updateMoveNotes = function(moveId, notes) {

};

module.exports.appendNextMove = function(moveId, nextMoveId, rating, label, symbol) {

};

module.exports.updateNextMove = function(moveId, nextMoveId, rating, label, symbol) {

};

module.exports.deleteNextMove = function(moveId, nextMoveId) {

};

module.exports.findPreviousMoves = function(nextMoveId) {

};

module.exports.deleteMove = function(moveId) {

};
