class Scoreboard{
    
    constructor(){        
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
    }

    updateScoreboard() {
        var output = '<h2>Scoreboard</h2>';
    
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += '<h4>';
            output += result.name + ': ' + result.score + '/'
                + result.problems + ' for factor ' + result.factor;
            output += '</h4>';
        }
        var scoreElement = document.getElementById('scores');
        scoreElement.innerHTML = output;
    }

}

export default Scoreboard;