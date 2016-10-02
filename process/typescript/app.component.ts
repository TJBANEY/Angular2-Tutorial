import {Component} from 'angular2/core';

@Component({
	selector: 'my-app', 
	templateUrl: 'partials/app.html'
})

export class AppComponent {
	name: string;
	artists: any;

	constructor(){ // Adjusts settings on the class when it is initialized.
		this.name = 'Tim'
		this.artists = [
			{
				name: 'Tim',
				school: 'Corona'
			},
			{
				name: 'Courtney',
				school: 'Corona'
			},
			{
				name: 'Harry Potter',
				school: 'Hogwarts'
			},
			{
				name: 'Annie',
				school: 'School of Hardknocks'
			}
		]
	}

	onClick(myName) {
		this.name = myName;
	}

	addArtist(artist) {
		var newArtist = {
			name: artist,
			school: "Test School"
		}
		this.artists.push(newArtist);
	}

}