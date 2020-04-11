define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.logPlayer = logPlayer;
  _exports.setName = setName;
  _exports.getName = getName;
  var playerName = '';

  function logPlayer() {
    console.log('The current player is ' + playerName + +'.');
  }

  function setName(newName) {
    playerName = newName;
  }

  function getName() {
    return playerName;
  }
});