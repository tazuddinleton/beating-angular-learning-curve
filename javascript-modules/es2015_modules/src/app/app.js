
// Javascript module patterns
/**
 * IIFE Module Pattern
 * Revealing Module Pattern
 *      Signleton
 *      Constructor Function
 *        
 * 
 */


import {setName} from './player';
import {printGame, calculateScore, getProblemCount} from './game';

console.log('hello world');
console.log('Starting MultiMath with an IIFE');

document.getElementById('startGame')
.addEventListener('click', function(){
    setName(document.getElementById('playername').value);
    printGame();        
});

document.getElementById('calculate')
.addEventListener('click', function(){
    calculateScore();
});

document.getElementById('problemCount').value = getProblemCount();
