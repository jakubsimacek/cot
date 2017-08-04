const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testing = {
    created: {type: Date, required: true},
    result: {type: Integer, required}
};
  
const init = {
    name: {type: String, required: true},
    type: {type: String, required: true},  // Opening, Match, Ending, Other
    whiteStarts: {type: Boolean, required}
};

const nextMove = {
    move: {type: String, required: true},
    rating: int,
    label: String,
    symbol: String
};

const move = {
    //owner: {type: String, required: true},
    init: { init },
    //label: String,
    isWhiteOnMove: {type: Boolean, required: true},
    state: {type: String, required: true}, // 64-byte string containg the pieces on the board
    created: {type: Date, required: false},
    title: {type: String, required: true},
    notes: {type: String, required: false},
    nextMoves: [ nextMove ],
    tests: [ testing ]
};

const Move = new Schema(move);

module.exports = mongoose.model('Move', Move);
