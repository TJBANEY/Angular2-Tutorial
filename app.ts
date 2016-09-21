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

/******  Typescript data types  *******

- Number
- String
- Boolean
- Null / Undefined
- Object

**************************************/

/********  Type Inference  ************

- Type inference in Typescript is when the data type of a variable
is implicitly assumed by looking at the value of a variable. For 
instance if the value of var num1 is 12, it will assume that the 
data type is a number. It will also enforce this assumed data type
like a staticly typed language such as java would do. So you couldn't
assign an infered number type such as num1 to a string without it raising
an issue.

- If Typescript cannot infer  what type an object is, than it will simply
give up and assign the object to the 'any' type, which is like letting that
variable act as a pure dynamically type variable much like vanilla javascript 
allows you to do.

- You can also explicitly tell what data type a variable should be. The 
syntax for that is to put a colon, and the type after the variable. i.e.

function example(variable1, variable2: string){
	var example2 = variable1.lengt + variable2.lengt;

	return example2
}

This will throw an exception because a string doesn't have any 
property called lengt.

- You can also set return values explicity with the same syntax, just putting
the colon and data type after the function parameters area.

function example(variable1, variable2: string) : number {
	
}

- The return value for this function has to be of type number or else it will
raise an exception.

**************************************/



/*********  Union Types  *************

-Typescript allows you to let a variable explicitly declared as more than one
different data types. The syntax for this is to simply use the javascript 'or'
operator. for example

function example(variable1: (any[] | string), variable2: (any[] | string)){

	if (variable1 instanceof Array){
		do something
	} else {
		do something else
	}

}

- The parameters in for this function can either be an array of any values, or a
string, but nothing else.

- You can also use if logic in your function to tell it to do one thing or the 
other depending on if the parameter is an instance of one datatype object or the
other. "Type gaurd syntax"

- Another approach to the same issue that the Type gaurd syntax helps solve, another
solution TypeScript provides is to simply use overloaded functions. Overloaded functions
in TypeScript are different than languages like Java or C# though because you can
only use one implementation of that function. So the syntax is to stack the function
signatures on top of one another

function example(variable1: string, variable2: string): string
function example(variable1: number, variable2: number): number
function example(variable1: any[], variable2: any[]){

	if (variable1 instanceof Array){
		do something
	} else {
		do something else
	}

}

*************************************/

/******* TypeScript Custom Types ********/

// 1) Interface = Acts as a contract that describes the data and behaviors that the object
// exposes.

interface Todo {
	name: number;
	completed?: boolean;
}

interface ITodoService {

	add(todo: Todo): Todo; // Method that takes one parameter, and returns that created Todo
	delete(todoId: number): void; // Method that takes one parameter, but does not return anything
	getAll(): Todo[]; // Method that takes no paramters, and returns an array of Todo objects
	getById(todoId: number): Todo; // Method that takes one parameter, and returns a Todo object

}

var Todo1 = {
	name: 'Pick up drycleaning'
}

// Interfaces are stricly used for compile time checks only, and have no affect 
// on code at runtime.

// Question mark states that completed is not required, but if you do decide to 
// use it, it must be a boolean value.

// Interfaces can also be used to describe functions.

interface jQuery {
	(selector: string): HTMLElement;
	version: number;
}

var $ = <jQuery>function(selector){
	// find DOM Element
}

$.version = 1.12

// <> Is the syntax to cast a variable into a certain type. This is sayingthat the $ 
// function needs to be a jQuery type.

interface jQueryElement {
	data(name: string): any;
	data(name: string, data: any): jQueryElement
}

interface jQueryElement {
	todo(): Todo;
	todo(todo: Todo): jQueryElement;
}

// Having a second interface by the same name will extend the first interface without changing
// its original state or behavior. *Really should only be used when extending third party code.


// 2) Enums = Like boolean has two states: True or False, Enums can have multiple different states

enum TodoState {
	New = 1, 
	Active = 2,
	Completed = 3,
	Deleted = 4
}

/* 

interface Todo {
	name: number;
	state: TodoState;
} 

var Todo1 = {
	name: 'Pick up drycleaning'
	state: TodoState.New
}

function todoState(todo: Todo){
	
	if(todo.state != TodoState.Completed ){
		throw "Can't complete already completed task"
	}

}

*/

/* Classes and Prototypes */

function TodoServicePrototype(){
	this.todos = [];
}

TodoServicePrototype.prototype.getAll = function(){
	return this.todos;
}

var service = new TodoServicePrototype();
service.getAll();

// When presented with state or behavior on an object, TypeScript will first look at that
// object for the state or behavior, and if that object doesn't have it, it will go to that
// object's prototype that it inherits from, and will keep doing that until it gets to the
// 'Object' object.

/****  1. Defining a Class  ****/

class TodoServiceClass {

	static lastId: number = 0;

	_state: TodoState;

	get state(){
		return this._state
	}

	set state(newState){

		if (newState == TodoState.Completed){

			var canBeCompleted = this.state == TodoState.Active || this.state == TodoState.Deleted;

			if (!canBeCompleted){
				throw "Todo must be Active or Deleted in order to be marked complete.";
			}

			this._state = newState;

		}

	}

	constructor(private todos: Todo[]) {

	}

	add(todo: Todo){
		var newId = TodoServiceClass.getNextId();
	}

	static getNextId(){
		return TodoServiceClass.lastId += 1;
	}

	getAll(){
		return this.todos;
	}
}

// Extends keyword extends a class, or can override it. You do not need a constructor
// on the extended class. If you do not include one, it will simply inherit from the base
// class

interface Todo {
	state: TodoState;
} 

class CompleteTodoStateChanger extends TodoStateChanger {

	constructor(){
		super(TodoState.Completed);
	}

	canChangeState(todo: Todo): boolean {
		return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted)
	}

}

/*****  Abstract Base Classes  *****/

// Abstract classes are used for classes that were only meant to be extended or overwritten
// as base classes, and not instantiated directly.

abstract class TodoStateChanger {

	constructor (protected newState: TodoState){

	}

	canChangeState(todo: Todo): boolean {
		return !!todo;
	}

	changeState(todo: Todo): Todo {
		if (this.canChangeState(todo)){
			todo.state = this.newState;
		}

		return todo;
	}
}

abstract class TodoStateChangerWithAbstractMethods {

	constructor (protected newState: TodoState){

	}

	abstract canChangeState(todo: Todo): boolean;
	// Making a method abstract mean that every derived class must implement its own
	// version of this method.

	changeState(todo: Todo): Todo {
		if (this.canChangeState(todo)){
			todo.state = this.newState;
		}

		return todo;
	}
}

// An error will be raised if you attempt to instantiate an abstract class.

/******  Accesss Modifiers  *****/

// Access modifiers include private, public, protected among others.

// If setting an access modifier on a getter or setter, both the getter and setter 
// version of the same method must use the same access modifier.

// Private = Only methods defined directly on the same class definition may access that member.

// Public = And member can use this method.

// Protected = Same as Private, but extended or inherited class from that member can also use those methods


