function getData(data, callBack) {
    setTimeout(() => {
        callBack(data);
    }, 1000);
}


getData(10, function (num1) {
    var x = 1 + num1;
    getData(30, function (num2) {
        var y = 1 + num2;
        getData('The meaning of life is ' + (x + y), function (answer) {
            console.log(answer);
        });
    });
});