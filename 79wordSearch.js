/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {

      const helper = (index, l, w) => {
        if (board[l] && board[l][w] === word[index]) {
          if (index === word.length - 1) {
            return true;
          }
          const temp = board[l][w];
          board[l][w] = '*';
          const result = helper(index + 1, l - 1, w) || helper(index + 1, l + 1, w) || helper(index + 1, l, w - 1) || helper(index + 1, l, w + 1);
          board[l][w] = temp;
          return result;
        }
      }

      if (helper(0, i, j)) {
        return true;
      }
    }
  }
  return false;

};
