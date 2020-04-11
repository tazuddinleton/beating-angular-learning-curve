define(["./player", "./game"], function (_player, _game) {
  "use strict";

  // Javascript module patterns

  /**
   * IIFE Module Pattern
   * Revealing Module Pattern
   *      Signleton
   *      Constructor Function
   *        
   * 
   */
  console.log('hello world');
  console.log('Starting MultiMath with an IIFE');
  document.getElementById('startGame').addEventListener('click', function () {
    player.setName(document.getElementById('playername').value);
    game.printGame();
  });
  document.getElementById('calculate').addEventListener('click', function () {
    game.calculateScore();
  });
  document.getElementById('problemCount').value = game.getProblemCount();
});