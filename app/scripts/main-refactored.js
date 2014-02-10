var HotOrCold = {

  init: function( settings ) {
    HotOrCold.config = {
      answer: null,
      $body: $('body'),
      $newGame: $('#newGame'),
      $reply: $('#reply'),
      $replySm: $('#reply-2'),
      $guess: $("#guess"),
      guesses: [],
      prevGuess: null,
      $submitAnswer: $('#submit')
    };

    // allow overriding the default config
    $.extend( HotOrCold.config, settings );

    HotOrCold.setup();
  },

  setup: function() {
    HotOrCold.config.$submitAnswer.on( 'click', HotOrCold.validateGuess );
    HotOrCold.config.$newGame.hide();
  },

  startGame: function() {
    var answer = Math.floor(Math.random()*100);
    console.log(answer);
  },

  validateGuess: function(guess) {
    var guess = HotOrCold.config.$guess.val();
    var emptyGuess = !guess.match(/\S/);

    if (isNaN(guess) || emptyGuess) {
      HotOrCold.showErrorMessage(guess);
      console.log(guess);
    } else {
      HotOrCold.startGame;
    }

    return false;
  },

  showErrorMessage: function() {
    console.log(guess);
    if (isNaN(guess)) {
      HotOrCold.config.$reply.html( guess + " is not a number. <br>Please enter a valid number");
      HotOrCold.config.$replySm.empty();
    } else {
      HotOrCold.config.$reply.html("No empty spaces. <br> Please enter a valid number");
    }
  }

};

$(document).ready( HotOrCold.init );