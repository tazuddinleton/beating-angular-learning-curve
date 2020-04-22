function getData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}

var x;
getData(10).then(function (num1) {
    x = num1 + 1;
    return getData(30);
}).then(function (num2) {
    var y = num2 + 1;
    return getData('The meaning of life is ' + (x + y));
}).then(function (answer) {
    console.log(answer);
}).catch(function (err) { console.log(err) });


