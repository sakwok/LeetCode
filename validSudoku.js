var isValidSudoku = function (board) {

  const checkAllRowsAndCols = (board) => {
    for (let i = 0; i < board.length; i++) {
      const checkDupRow = {};
      const checkDupCol = {};
      for (let j = 0; j < board[i].length; j++) {
        if (!checkDupCol[board[j][i]]) {
          if (board[j][i] !== '.') {
            checkDupCol[board[j][i]] = 1;
          }
        } else {
          return false;
        }
        if (!checkDupRow[board[i][j]]) {
          if (board[i][j] !== '.') {
            checkDupRow[board[i][j]] = 1;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }
  const checkAllSubBoxes = (board) => {
    const checkSubBoxes = (rowStart, colStart) => {
      const checkSubBox = {};
      for (let i = rowStart; i < rowStart + 3; i++) {
        for (let j = colStart; j < colStart + 3; j++) {
          if (!checkSubBox[board[i][j]]) {
            if (board[i][j] !== '.') {
              checkSubBox[board[i][j]] = 1;
            }
          } else {
            return false;
          }
        }
      }
      return true;
    };
    for (let i = 0; i < board.length; i += 3) {
      for (let j = 0; j < board.length; j += 3) {
        if (!checkSubBoxes(i, j)) {
          return false;
        }
      }
    }
    return true;
  }

  if (checkAllRowsAndCols(board) && checkAllSubBoxes(board)) {
    return true;
  }

  return false;

};