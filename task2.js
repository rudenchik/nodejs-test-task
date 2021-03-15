const invert = (obj) => {
    let result = {};
    Object.keys(obj).forEach((key) => {
        result[obj[key]] = key;
    });
    return result;
};

console.log(invert({ 'a': 'some', 'b': 'object', 'c': 1 }));