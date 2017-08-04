
function getPiece(type) {
  return {
    type : type
  }
}

function getCoord() {
  return {
    rank : 0,
    file : 0
  };
}

function getPieces() {
  const pieces {};
  pieces.king = getCoord();
  pieces.queens = new Array();
  pieces.rooks = new Array();
  pieces.bishops = new Array();
  pieces.knights = new Array();
  pieces.pawns = new Array();
  return pieces;
}

const board = {
  isWhiteOnMove : true,
  isCheckMate : false,
  // whites
  // blacks
  pieces : [ {}, {} ],
  // board
}



module.export.init = function() {
  board.whites = getPieces;
  board.blacks = getPieces;
  board.board = new Array();
  for(r = 0; r < 8; r++) {
    board[r] = new Array();
    for(f = 0; f < 8; f++) {
      board[r][f] = getPiece(' ');
    }
  }

}

module.export.initialPosition = function() {
  resetBoard();
  setPiece('A1', 'W', 'R');
  setPiece('B1', 'W', 'N');
  setPiece('C1', 'W', 'B');
  setPiece('D1', 'W', 'Q');
  setPiece('E1', 'W', 'K');
  setPiece('F1', 'W', 'B');
  setPiece('G1', 'W', 'N');
  setPiece('H1', 'W', 'R');
  setPiece('A2', 'W', 'p');
  setPiece('B2', 'W', 'p');
  setPiece('C2', 'W', 'p');
  setPiece('D2', 'W', 'p');
  setPiece('E2', 'W', 'p');
  setPiece('F2', 'W', 'p');
  setPiece('G2', 'W', 'p');
  setPiece('H2', 'W', 'p');
  setPiece('A7', 'B', 'p');
  setPiece('B7', 'B', 'p');
  setPiece('C7', 'B', 'p');
  setPiece('D7', 'B', 'p');
  setPiece('E7', 'B', 'p');
  setPiece('F7', 'B', 'p');
  setPiece('G7', 'B', 'p');
  setPiece('H7', 'B', 'p');
  setPiece('A8', 'B', 'R');
  setPiece('B8', 'B', 'N');
  setPiece('C8', 'B', 'B');
  setPiece('D8', 'B', 'Q');
  setPiece('E8', 'B', 'K');
  setPiece('F8', 'B', 'B');
  setPiece('G8', 'B', 'N');
  setPiece('H8', 'B', 'R');
  resetCastling();
}

module.export.loadBoard(data) {

}

module.export.saveBoard() {

}

