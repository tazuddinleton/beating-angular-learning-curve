
(function(){
    console.log('hello world');
    console.log('Starting MultiMath with an IIFE');
    
    document.getElementById('startGame')
    .addEventListener('click', function()
        player.setName(document.getElementById('playername').value);
        game.printGame();
    });

    document.getElementById('calculate')
    .addEventListener('click', function(){
        game.calculateScore();
    });

    document.getElementById('problemCount').value = game.getProblemCount();
})();