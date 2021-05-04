var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    let index = stack.length; // Tar ut längden på stacken

    // Tar bort det näst översta i stacken istället för det översta
    return stack.splice(index-2, 1) // Medvetet felaktigt

    // return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}
