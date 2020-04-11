define(["exports", "./player", "./scoreboard"], function (_exports, _player, _scoreboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.printGame = printGame;
  _exports.calculateScore = calculateScore;
  _exports.setProblemCount = setProblemCount;
  _exports.getProblemCount = getProblemCount;
  var factorElement = document.getElementById('factor');
  var problemsPerGame = 3;

  function printGame() {
    (0, _player.logPlayer)();
    setProblemCount(document.getElementById('problemCount').value);
    var gameForm = '';

    for (var i = 1; i <= problemsPerGame; i++) {
      gameForm += "\n            <div class=\"form-group\">\n            <label for=\"answer".concat(i, "\" class=\"col-sm-2 control-label\">").concat(factorElement.value, " x ").concat(i, "</label>\n            <div class=\"col-sm-1\">\n                <input type=\"text\" class=\"form-control\" id=\"answer").concat(i, "\" />\n            </div>\n            </div>    \n            ");
    }

    var gameElement = document.getElementById('game');
    gameElement.innerHTML = gameForm;
    document.getElementById('calculate').removeAttribute('disabled');
  }

  function calculateScore() {
    var problemsInGame = getProblemCount();
    var score = 0;

    for (var i = 1; i <= problemsInGame; i++) {
      var answer = document.getElementById('answer' + i).value;
      console.log(answer);

      if (i * factorElement.value == answer) {
        score++;
      }
    }

    var result = {
      name: (0, _player.getName)(),
      score: score,
      problems: problemsInGame,
      factor: factorElement.value
    };
    var scoreboard = new _scoreboard.Scoreboard();
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();
    document.getElementById('calculate').setAttribute('disabled', 'true');
  }

  function setProblemCount(newProblemCount) {
    problemsPerGame = newProblemCount;
  }

  function getProblemCount() {
    return problemsPerGame;
  }
});