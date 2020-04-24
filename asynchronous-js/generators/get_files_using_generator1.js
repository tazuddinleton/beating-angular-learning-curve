const { AsyncSequence, print } = require('./sequence');

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

let seq = new AsyncSequence(function* () {
    let p1 = getFile('file1');
    let p2 = getFile('file2');
    let p3 = getFile('file3');

    print(yield p1);
    print(yield p2);
    print(yield p3);
    print("Completed!");
});

function getFile(filename) {
    return new Promise(function (resolve) {
        fakeAjax(filename, resolve);
    });
}

seq.run();
