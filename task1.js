const groupBy = (array, func) => {
    let result = {};
    array.forEach((elem) => {
        if (!result[func(elem)]) {
            result[func(elem)] = [];
            result[func(elem)].push(elem);
        } else {
            result[func(elem)].push(elem);
        }
    });
    return result;
};

console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor));