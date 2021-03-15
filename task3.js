const checkParentheses = (str) => {
    let brackets = "[]{}()";
    let matches = [];

    for (let letter of str) {
        let bracketsIndex = brackets.indexOf(letter);

        if (bracketsIndex === -1) {
            continue;
        }

        if (bracketsIndex % 2 === 0) {
            matches.push(bracketsIndex + 1);
        } else {
            if (matches.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return matches.length === 0;
};


console.log(checkParentheses('--()--'));
console.log(checkParentheses('-a]--['));
console.log(checkParentheses('dsa{vsfs{ad'));
console.log(checkParentheses('j78(g5b]uyg'));
console.log(checkParentheses(',m{i987y}hj'));
console.log(checkParentheses('dsa[3ed---:]::'));