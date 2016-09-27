<reference path="node_modules/angular2/typings/browser.d.ts"/>

import {Component} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'

// Decorator, allows us to set up information about our components
@Component({
	selector: 'my-app', // Name of the html tag we want to create
	template: '<h1>Welcome to our app</h1>'
})

class AppComponent {

}

bootstrap(AppComponent) // bootstrap function will look for the selector that we define
						// in our html, and then bind the information from our module
						// to it.