var todo = "Wash the clothes";
var todo2 = "Clean the dishes";
var container = document.getElementById('container');
function countdown(initial, final, interval) {
    if (final === void 0) { final = 0; }
    if (interval === void 0) { interval = 1; }
    var current = initial;
    while (initial > final) {
        container.innerHTML = current;
        current -= final;
    }
}
countdown(10);
// var todo = {
// 	id: 123,
// 	name: 'Pick up drycleaning',
// 	completed: true
// }
// var displayName = `Todo #${todo.id}`;
// container.innerHTML = `
// <div todo='${todo.id}' class='list-group-item}'>
// 	<i class='${todo.completed ? "" : "hidden"} text-success glyphicon glyphicon-ok'></i>
// 	<span class='name'>${todo.name}</span>
// </div>
// `
// for (var item of list){
// 	console.log(`${item}`)
// }
// Spread Operator - Lets you add as many values as you want to be used as an array 
// later in your function. The spread operator can also be used to insert an array 
// into an another array.
function calculate(action) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        switch (action) {
            case 'subtract':
                total -= value;
                break;
            case 'add':
                total += value;
                break;
        }
    }
    return total;
}
calculate('add', 1, 2, 3, 4);
var source = [1, 5, 7];
var example_array = [4, 6, 6].concat(source, [9]);
