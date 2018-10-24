describe('generateWinningNumber function', () => {
  it('returns a random number between 1 and 100', () => {
    spyOn(Math, 'random').and.returnValue(0.155);
    expect(generateWinningNumber()).toBe(16);
    Math.random.and.returnValue(0.0000034);
    expect(generateWinningNumber()).toBe(1);
    Math.random.and.returnValue(0.9999934);
    expect(generateWinningNumber()).toBe(100);
  });
});

describe('shuffle function', () => {
  //Use the fisher-yates Shuffle algorithm
  //Here is a great resource on the algorithm with an animation.  Read all the way to the end!
  //https://bost.ocks.org/mike/shuffle/
  it('takes an array as an argument, and returns an array', () => {
    let shuffledArray = shuffle([20, 50, 70]);
    expect(shuffledArray.length).toBe(3);
  });
  it('shuffles an array using Math.random to place elements', () => {
    //By making Math.random deterministic, we can test the output of shuffle
    spyOn(Math, 'random').and.returnValue(0.5);
    let shuffledArray = shuffle([20, 50, 70]);
    expect(Math.random).toHaveBeenCalled();
    expect(shuffledArray).toEqual([20, 70, 50]);
  });
  it('returns the array shuffled in place', () => {
    //What does 'in place' mean?
    //It means that you are modifying the original array, not making a new array.
    const unshuffledArray = [20, 50, 70];
    const shuffledArray = shuffle(unshuffledArray);
    expect(shuffledArray.length).toBe(3);
    expect(shuffledArray === shuffledArray).toEqual(true);
  });
});

describe('Game class', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should have a playersGuess property, and a pastGuesses property ', () => {
    //playersGuess property is what will hold the player's number guess
    //pastGuesses will be an array, and holds all of the player's past guesses
    expect(game.playersGuess).toBe(null);
    expect(Array.isArray(game.pastGuesses)).toBe(true);
    expect(game.pastGuesses.length).toBe(0);
  });

  it('should have a winningNumber property, which calls generateWinningNumber', () => {
    // note: generateWinningNumber is a function in the global scope
    game = new Game();
    expect(typeof game.winningNumber).toBe('number');
  });

  describe('methods on the game class `.prototype`', () => {
    describe('difference ', () => {
      it('returns the absolute value of the difference between the playersGuess and winningNumber', () => {
        game.playersGuess = 20;
        game.winningNumber = 10; //Here we are overwriting the random winningNumber so that we can test effectively
        expect(game.difference()).toBe(10);
        game.winningNumber = 30;
        expect(game.difference()).toBe(10);
      });
    });

    describe('isLower function', () => {
      it('returns true if the playersGuess is lower than winningNumber, and false if not.', () => {
        game.playersGuess = 20;
        game.winningNumber = 10;
        expect(game.isLower()).toBe(false);
        game.winningNumber = 30;
        expect(game.isLower()).toBe(true);
      });
    });

    describe('playersGuessSubmission function', () => {
      it('takes a number as an argument and sets that as playersGuess', () => {
        game.playersGuessSubmission(42);
        expect(game.playersGuess).toBe(42);
      });
      it('throws an error if the number is invalid (less than 1, greater than 100, or not a number)', () => {
        expect(() => {
          game.playersGuessSubmission(0);
        }).toThrow('That is an invalid guess.');
        expect(() => {
          game.playersGuessSubmission(-1);
        }).toThrow('That is an invalid guess.');
        expect(() => {
          game.playersGuessSubmission(101);
        }).toThrow('That is an invalid guess.');
        expect(() => {
          game.playersGuessSubmission('not a number');
        }).toThrow('That is an invalid guess.');
      });
      it('calls checkGuess', () => {
        spyOn(Game.prototype, 'checkGuess');
        game.playersGuessSubmission(42);
        expect(Game.prototype.checkGuess).toHaveBeenCalled();
      });
    });

    describe('checkGuess function', () => {
      it('returns a string', () => {
        //The last spec specifies that playersGuessSubmission should call checkGuess
        //playersGuessSubmission should also return that call, so that the return value
        //of playersGuessSubmissions is the return value of checkGuess.
        let result = game.playersGuessSubmission(42);
        expect(typeof result).toBe('string');
      });
      it('returns "You Win!" if playersGuess equals winningGuess', () => {
        game.winningNumber = 42;
        expect(game.playersGuessSubmission(42)).toBe('You Win!');
      });
      it('returns "You have already guessed that number." if playersGuess is in pastGuesses', () => {
        game.winningNumber = 42;
        game.playersGuessSubmission(36);
        expect(game.playersGuessSubmission(36)).toBe(
          'You have already guessed that number.'
        );
      });
      it("if playersGuess isn't the winningNumber or a duplicate, add it to pastGuesses", () => {
        game.winningNumber = 42;
        game.playersGuessSubmission(36);
        expect(game.pastGuesses.indexOf(36)).toBeGreaterThan(-1);
      });
      it('returns "You Lose" if this is the players 5th guess', () => {
        game.winningNumber = 42;
        game.playersGuessSubmission(1);
        game.playersGuessSubmission(2);
        game.playersGuessSubmission(3);
        game.playersGuessSubmission(4);
        expect(game.playersGuessSubmission(5)).toBe('You Lose.');
      });
      it('returns "You\'re burning up!" if the difference between playersGuess and winningGuess is less than 10', () => {
        game.winningNumber = 42;
        expect(game.playersGuessSubmission(45)).toBe("You're burning up!");
      });
      it('returns "You\'re lukewarm." if the difference between playersGuess and winningGuess is less than 25', () => {
        game.winningNumber = 42;
        expect(game.playersGuessSubmission(62)).toBe("You're lukewarm.");
      });
      it('returns "You\'re a bit chilly." if the difference between playersGuess and winningGuess is less than 50', () => {
        game.winningNumber = 42;
        expect(game.playersGuessSubmission(72)).toBe("You're a bit chilly.");
      });
      it('returns "You\'re ice cold!" if the difference between playersGuess and winningGuess is less than 100', () => {
        game.winningNumber = 42;
        expect(game.playersGuessSubmission(92)).toBe("You're ice cold!");
      });
    });

    describe('newGame function', () => {
      it('returns an empty, new game instance', () => {
        game = newGame(); // newGame calls new Game() and returns the new instance
        expect(game.playersGuess).toEqual(null);
        expect(game.pastGuesses.length).toEqual(0);
      });
    });

    describe('provideHint function', () => {
      it('generates an array with a length of 3', () => {
        let hintArray = game.provideHint();
        expect(hintArray.length).toBe(3);
      });
      it('includes the winningNumber', () => {
        let hintArray = game.provideHint();
        expect(hintArray.indexOf(game.winningNumber)).toBeGreaterThan(-1);
      });
      it('calls generateWinningNumber to fill the rest of the hint array with random numbers', () => {
        spyOn(window, 'generateWinningNumber'); // note: in order to pass this spec, generateWinningNumber needs to be defined
        // with a function declaration, ex: function generateWinningNumber() {}
        game.provideHint();
        expect(generateWinningNumber.calls.count()).toBe(2);
      });
      it('calls the shuffle function', function() {
        spyOn(window, 'shuffle'); // note: in order to pass this spec, shuffle needs to be defined
        // with a function declaration, ex: function shuffle() {}
        game.provideHint();
        expect(shuffle).toHaveBeenCalled();
      });
    });
  });
});
