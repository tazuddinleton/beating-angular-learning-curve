Array.prototype.filter = function (func) {
    var collection = []
    this.forEach(x => 
        func(x) ? collection.push(x): x = x)
    return collection
}

Array.prototype.map = function(func){
    var collection = [];
    this.forEach(x => 
        collection.push(func(x))
        );
    return collection;
}

