let todo: string = "Wash the clothes"
let todo2: string = "Clean the dishes"

var container = document.getElementById('container')

function countdown(initial, final = 0, interval = 1){

	var current = initial;

	while (initial > final) {
		container.innerHTML = current;
		current -= final;
	}
}
countdown(10)

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

function calculate(action, ...values){
	var total = 0;

	for (var value of values){

		switch(action){

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

calculate('add', 1, 2, 3, 4)

var source = [1, 5, 7]
var example_array = [4, 6, 6, ...source, 9]



