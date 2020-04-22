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

function getFile(url){
    return new Promise(function(resolve){
        fakeAjax(url, resolve);
    });
}

['file1', 'file2', 'file3']
.map(getFile)
.reduce(outputEachPromise, Promise.resolve())
.then(outputComplete);

function outputEachPromise(chain, promise){
    return chain.then(function chainPromise(){
        return promise;
    }).then(output);
}

function outputComplete(){
    output("Completed!");
}

function output(str) {
    console.log(str);
}