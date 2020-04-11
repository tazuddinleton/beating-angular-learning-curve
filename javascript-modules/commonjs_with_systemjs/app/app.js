
// Javascript module patterns
/**
 * IIFE Module Pattern
 * Revealing Module Pattern
 *      Signleton
 *      Constructor Function
 *        
 * 
 */



var player = require('./player.js');
var game = require('./game.js');

console.log('hello world');
console.log('Starting MultiMath with an IIFE');

document.getElementById('startGame')
.addEventListener('click', function(){
    player.setName(document.getElementById('playername').value);
    game.printGame();        
});

document.getElementById('calculate')
.addEventListener('click', function(){
    game.calculateScore();
});

document.getElementById('problemCount').value = game.getProblemCount();
