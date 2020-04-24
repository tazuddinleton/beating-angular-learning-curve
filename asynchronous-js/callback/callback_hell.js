/**
 * Callback hell is  
 * the deficiencies associated with 
 * the callback only programming style. 
 * Where you have to deal with two most difficult
 * problem of async programming one of them 
 * being the Inversion of Control
 * another one is the Non-local Non-sequential reasoning.
 * 
 * Inversion of Control: By using callback you giveawa your
 * capability of controlling your code the way you want. It can
 * introduce unexpected errors into your code.
 * 
 * Non-local Non-sequeential reasoning aspect is the complexity you 
 * introduce into your code by nesting more and more callbacks to 
 * fulfill the desired behavior of your code. The human brain is 
 * fundamentally single threaded and therefore it's difficult for
 * humans to reason asynchronously written code.
 * 
 * To address these issues we need higher order abstractions 
 * like Promises, Generators, Thunks etc.
 * 
 * Promises are really a placeholder for a future value that will be 
 * available upon completion of the request. In this sense of promise
 * a promise gives you an event listener where you can subscribe and 
 * get notified when your value is ready to harness.
 * Promises helps deal with trust issue by resolving only once.
 *  
 *  
 */

function fakeAjax(url, cb) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The middle text",
        "file3": "The last text"
    }
    var randomDelay = Math.round(Math.random() * 1E4) % 8000 + 10;
    console.log('requesting: ' + url);
    setTimeout(() => {
        cb(fake_responses[url]);
    }, randomDelay);
}




function getFile(filename) {
    fakeAjax(filename, function (text) {
        handleResponse(filename, text);
    });
}

getFile('file1');
getFile('file2');
getFile('file3');

var responses = {}
var filenames = ["file1", "file2", "file3"]
function handleResponse(filename, content) {
    responses[filename] = responses[filename] || content;
    for (var i = 0; i < filenames.length; i++) {
        if (!responses[filenames[i]]) {
            return;
        }
        output(responses[filenames[i]]);
        responses[filenames[i]] = false;
    }
    output("Completed!");
}

function output(str) {
    console.log(str);
}