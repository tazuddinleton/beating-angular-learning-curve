
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

var file1 = getThunk(fakeAjax, 'file1');
var file2 = getThunk(fakeAjax, 'file2');
var file3 = getThunk(fakeAjax, 'file3');


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



function getThunk(fn){
    var response, callback;
    var args = [].slice.call(arguments, 1);
    args.push(function(res){
        if (callback) callback(res);
        else response = res;
    });
    fn.apply(null, args);
    return function(cb){
        if (response) cb(response);
        else callback = cb;
    }
}




