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