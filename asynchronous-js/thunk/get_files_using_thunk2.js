// Active thunking by using thunk mediator
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

// It's a Thunk mediator
function getFile(filename) {
    var response, callback;

    fakeAjax(filename, function (res) {
        if (callback) callback(res);
        else response = res;
    });

    return function (cb) {
        if (response) cb(response);
        else callback = cb;
    }
}


var file1 = getFile('file1');
var file2 = getFile('file2');
var file3 = getFile('file3');


file1(function (content) {
    output(content);
    file2(function (content) {
        output(content);
        file3(function (content) {
            output(content);
            output('Completed!.');
        });
    });
});




function output(str) {
    console.log(str);
}