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
    (0, _player.setName)(document.getElementById('playername').value);
    (0, _game.printGame)();
  });
  document.getElementById('calculate').addEventListener('click', function () {
    (0, _game.calculateScore)();
  });
  document.getElementById('problemCount').value = (0, _game.getProblemCount)();
});