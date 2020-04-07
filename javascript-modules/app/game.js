var game = function () {
    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3;
    function printGame() {
        player.logPlayer();

        setProblemCount(document.getElementById('problemCount').value);



        var gameForm = '';

        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm +=
            `
            <div class="form-group">
            <label for="answer${i}" class="col-sm-2 control-label">${factorElement.value} x ${i}</label>
            <div class="col-sm-1">
                <input type="text" class="form-control" id="answer${i}" />
            </div>
            </div>    
            `    
        }

        

        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;

        document.getElementById('calculate').removeAttribute('disabled');
    }

    function calculateScore(){
        var problemsInGame = getProblemCount();
        var score = 0;

        for(var i = 1; i <= problemsInGame; i++){
            var answer = document.getElementById('answer'+i).value;
            console.log(answer);
            if(i*factorElement.value == answer){
                score++;
            }
        }

        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factorElement.value
        }

        scoreboard.addResult(result);
        scoreboard.updateScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }

    function setProblemCount(newProblemCount){
        problemsPerGame = newProblemCount;
    }

    function getProblemCount(){
        return problemsPerGame;
    }



    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    }
}();