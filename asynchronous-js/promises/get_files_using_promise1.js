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


///// Method 1
// var file1 = getFile('file1');
// var file2 = getFile('file2');
// var file3 = getFile('file3');

// file1
// .then(output)
// .then(function(){
//     return file2;
// })
// .then(output)
// .then(function(){
//     return file3;
// })
// .then(output)
// .then(function(){
//     output("Completed!");
// });

/// Method 2
var promises = [
    getFile('file1'),
    getFile('file2'),
    getFile('file3')
];
Promise.all(promises)
.then(function(contents){
    contents.forEach(output);
    output('Completed!');
});

// Promise.all(promises)
// .then(function(contents){
//     contents.forEach(output);
//     output('Completed!');
// });


function output(str) {
    console.log(str);
}