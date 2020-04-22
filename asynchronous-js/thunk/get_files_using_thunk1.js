// Lazy thunking

var makeThunk =  require('./make_thunk').makeThunk;

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



var file1 = makeThunk(fakeAjax, 'file1');
var file2 = makeThunk(fakeAjax, 'file2');
var file3 = makeThunk(fakeAjax, 'file3');


file1(function(content){
    console.log(content);
    file2(function(content){
        console.log(content);
        file3(function(content){
            console.log(content);
        });
    });
});




