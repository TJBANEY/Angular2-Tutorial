var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Todo1 = {
    name: 'Pick up drycleaning'
};
var $ = function (selector) {
    // find DOM Element
};
$.version = 1.12;
// Having a second interface by the same name will extend the first interface without changing
// its original state or behavior. *Really should only be used when extending third party code.
// 2) Enums = Like boolean has two states: True or False, Enums can have multiple different states
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Completed"] = 3] = "Completed";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
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
function TodoServicePrototype() {
    this.todos = [];
}
TodoServicePrototype.prototype.getAll = function () {
    return this.todos;
};
var service = new TodoServicePrototype();
service.getAll();
// When presented with state or behavior on an object, TypeScript will first look at that
// object for the state or behavior, and if that object doesn't have it, it will go to that
// object's prototype that it inherits from, and will keep doing that until it gets to the
// 'Object' object.
/****  1. Defining a Class  ****/
var TodoServiceClass = (function () {
    function TodoServiceClass(todos) {
        this.todos = todos;
    }
    Object.defineProperty(TodoServiceClass.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == TodoState.Completed) {
                var canBeCompleted = this.state == TodoState.Active || this.state == TodoState.Deleted;
                if (!canBeCompleted) {
                    throw "Todo must be Active or Deleted in order to be marked complete.";
                }
                this._state = newState;
            }
        },
        enumerable: true,
        configurable: true
    });
    TodoServiceClass.prototype.add = function (todo) {
        var newId = TodoServiceClass.getNextId();
    };
    TodoServiceClass.getNextId = function () {
        return TodoServiceClass.lastId += 1;
    };
    TodoServiceClass.prototype.getAll = function () {
        return this.todos;
    };
    TodoServiceClass.lastId = 0;
    return TodoServiceClass;
}());
var CompleteTodoStateChanger = (function (_super) {
    __extends(CompleteTodoStateChanger, _super);
    function CompleteTodoStateChanger() {
        _super.call(this, TodoState.Completed);
    }
    CompleteTodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Deleted);
    };
    return CompleteTodoStateChanger;
}(TodoStateChanger));
/*****  Abstract Base Classes  *****/
// Abstract classes are used for classes that were only meant to be extended or overwritten
// as base classes, and not instantiated directly.
var TodoStateChanger = (function () {
    function TodoStateChanger(newState) {
        this.newState = newState;
    }
    TodoStateChanger.prototype.canChangeState = function (todo) {
        return !!todo;
    };
    TodoStateChanger.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    };
    return TodoStateChanger;
}());
var TodoStateChangerWithAbstractMethods = (function () {
    function TodoStateChangerWithAbstractMethods(newState) {
        this.newState = newState;
    }
    // Making a method abstract mean that every derived class must implement its own
    // version of this method.
    TodoStateChangerWithAbstractMethods.prototype.changeState = function (todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    };
    return TodoStateChangerWithAbstractMethods;
}());
// An error will be raised if you attempt to instantiate an abstract class.
