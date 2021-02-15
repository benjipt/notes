// URL: https://www.codecademy.com/paths/web-development/tracks/javascript-back-end-development/modules/express-cumulative-project/articles/bapi-reading-tests


describe('setPlayerMoves() - Main Functionality', function() { // this is a `describe` block, everything within this callback function is one test suite
  afterEach(clearMoves); // this is a `hook` that gets called between `it` blocks to reset the state

  it('a function called setPlayerMoves should exist', function() { // this is an `it` block, everything inside this function is a single test case
    should.equal(typeof setPlayerMoves, 'function'); // tests often start by checking that the right things exist and are of the right type
  });

  it('should set player one\'s moves with valid inputs', function() {
    setPlayerMoves('Player One', 'rock', 11); // here we call a function from the code we are testing that sets play one's move to rock with a value of 11

    should.equal(playerOneMoveOneType, 'rock'); // this is an assertion that tests that after the `setPlayerMoves()` function above is called, playerOneMoveOneType should equal `rock`
    should.equal(playerOneMoveOneValue, 11); // this assertion tests that setPlayerMoves can set the value of playerOneMoveOneValue
  });
})

//Here we call the function clearMoves which is a helper function that sets all of the moves back to undefined. It is written outside of any of the blocks, but used as a hook in many of them.
function clearMoves() {
    playerOneMoveOneType = undefined;
    playerOneMoveOneValue = undefined;
    playerTwoMoveOneType = undefined;
    playerTwoMoveOneValue = undefined;
  }

