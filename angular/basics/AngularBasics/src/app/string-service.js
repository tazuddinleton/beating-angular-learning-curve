
// An example third party service
var stringService = function () {
  function reverse(str) {
    var len = str.length;
    if (len <= 1) {
      return str;
    }
    var s = '';
    for (var i = len - 1; i >= 0; i--) {
      s += str[i];
    }
    return s;
  }
  console.log("string-service.js");
  return {
    reverse: reverse
  }
}();

